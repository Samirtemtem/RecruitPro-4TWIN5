pipeline {
    agent any

    tools {
        nodejs 'node'
        python 'python3.9'
    }

    environment {
        DOCKER_IMAGE_BACKEND = "ahmedbenhmida/recruitpro-backend"
        DOCKER_IMAGE_FRONTEND = "ahmedbenhmida/recruitpro-frontend"
        DOCKER_IMAGE_ATS = "ahmedbenhmida/recruitpro-ats"
        DOCKER_TAG = "latest"
    }

    stages {
        stage('Git Checkout') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: 'CI/CD_setup']],
                    userRemoteConfigs: [[
                        url: 'https://github.com/Samirtemtem/RecruitPro-4TWIN5.git',
                        credentialsId: 'AhmedBnHmida-GIT'
                    ]]
                ])
            }
        }

        stage('Install Dependencies') {
            parallel {
                stage('Frontend') {
                    steps {
                        dir('Frontend') {
                            sh 'npm install --force'
                        }
                    }
                }
                stage('Backend') {
                    steps {
                        dir('Backend') {
                            sh 'npm install --force'
                        }
                    }
                }
                stage('ATS') {
                    steps {
                        dir('Backend/applicant_tracking_system') {
                            sh 'pip install -r requirements.txt'
                        }
                    }
                }
            }
        }

        stage('Build') {
            parallel {
                stage('Frontend') {
                    steps {
                        sh 'npm install --force && npm run build'
                    }
                }
                stage('Backend') {
                    steps {
                        sh 'npm install --force && npm run build'
                    }
                }
                stage('ATS') {
                    steps {
                        echo 'No build step needed for ATS (Flask app)'
                    }
                }
            }
        }
/*
        stage('Test') {
            parallel {
                stage('Frontend') {
                    steps {
                        dir('Frontend') {
                            sh 'npm test || true'
                        }
                    }
                }
                stage('Backend') {
                    steps {
                        dir('Backend') {
                            sh 'npm test || true'
                        }
                    }
                }
                stage('ATS') {
                    steps {
                        dir('Backend/applicant_tracking_system') {
                            sh 'pytest || true'
                        }
                    }
                }
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('Kaddem-sq') {
                    dir('Frontend') {
                        sh 'npm run sonar || true'
                    }
                    dir('Backend') {
                        sh 'npm run sonar || true'
                    }
                    dir('Backend/applicant_tracking_system') {
                        sh 'pylint *.py || true'
                    }
                }
            }
        }
*/
        stage('Build Docker Images') {
            steps {
                sh 'docker build -t ${DOCKER_IMAGE_BACKEND}:${DOCKER_TAG} ./Backend'
                sh 'docker build -t ${DOCKER_IMAGE_FRONTEND}:${DOCKER_TAG} ./Frontend'
                sh 'docker build -t ${DOCKER_IMAGE_ATS}:${DOCKER_TAG} ./Backend/applicant_tracking_system'
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                }
            }
        }

        stage('Docker Push') {
            steps {
                sh 'docker push ${DOCKER_IMAGE_BACKEND}:${DOCKER_TAG}'
                sh 'docker push ${DOCKER_IMAGE_FRONTEND}:${DOCKER_TAG}'
                sh 'docker push ${DOCKER_IMAGE_ATS}:${DOCKER_TAG}'
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                sh 'docker-compose down || true'
                sh 'docker-compose up -d'
            }
        }

        stage('Post-Deployment Health Check') {
            steps {
                script {
                    def backendHealth = sh(script: 'curl --fail http://localhost:5000/api/jobs', returnStatus: true)
                    def atsHealth = sh(script: 'curl --fail http://localhost:5001/health', returnStatus: true)
                    def frontendHealth = sh(script: 'curl --fail http://localhost:3000', returnStatus: true)

                    if (backendHealth != 0) echo "⚠️ Backend not healthy"
                    if (atsHealth != 0) echo "⚠️ ATS not healthy"
                    if (frontendHealth != 0) echo "⚠️ Frontend not healthy"
                }
            }
        }

    }

    post {
        always {
            cleanWs()
        }
        failure {
            echo 'Pipeline failed!'
        }
        success {
            echo 'Pipeline completed successfully!'
        }
    }
}