pipeline {
    agent any

    tools {
        nodejs 'node'
    }

    environment {
        DOCKER_TAG = "latest"
        VERSION = "1.0.0"
        NEXUS_URL = "http://localhost:8081/repository/raw-releases"
        DOCKER_IMAGE_BACKEND = "ahmedbenhmida/recruitpro-backend"
        DOCKER_IMAGE_FRONTEND = "ahmedbenhmida/recruitpro-frontend"
        DOCKER_IMAGE_ATS = "ahmedbenhmida/recruitpro-ats"
        BUILD_ARCHIVE = "recruitpro_build_${VERSION}.tar.gz"
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
                            sh '''
                                python3 -m venv venv
                                . venv/bin/activate
                                pip install --upgrade pip
                                pip install -r requirements.txt
                            '''
                        }
                    }
                }
            }
        }

        stage('Build') {
            parallel {
                stage('Frontend') {
                    steps {
                        dir('Frontend') {
                            sh 'CI=false npm run build'
                        }
                    }
                }
                stage('Backend') {
                    steps {
                        dir('Backend') {
                            sh 'npm run build'
                        }
                    }
                }
                stage('ATS') {
                    steps {
                        echo 'No build needed for Python Flask app'
                    }
                }
            }
        }
/*
        stage('Unit Tests') {
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
                            sh '. venv/bin/activate && pytest || true'
                        }
                    }
                }
            }
        }
*/
        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('sq') {
                    dir('Frontend') {
                        sh 'npm run sonar || true'
                    }
                    dir('Backend') {
                        sh 'npm run sonar || true'
                    }
                    dir('Backend/applicant_tracking_system') {
                        sh '. venv/bin/activate && pylint *.py || true'
                        sh 'sonar-scanner || true'
                    }
                }
            }
        }

        stage('Archive Build and Upload to Nexus') {
            steps {
                script {
                    sh '''
                        tar -czf ${BUILD_ARCHIVE} Frontend Backend
                        curl -v --user admin:nexus --upload-file ${BUILD_ARCHIVE} ${NEXUS_URL}/${BUILD_ARCHIVE}
                    '''
                }
            }
        }

        stage('Download Build from Nexus') {
            steps {
                script {
                    sh '''
                        curl -O -u admin:nexus ${NEXUS_URL}/${BUILD_ARCHIVE}
                        tar -xzf ${BUILD_ARCHIVE}
                    '''
                }
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                }
            }
        }

        stage('Build Docker Images') {
            parallel {
                stage('Backend Image') {
                    steps {
                        sh 'docker build -t ${DOCKER_IMAGE_BACKEND}:${DOCKER_TAG} ./Backend'
                    }
                }
                stage('Frontend Image') {
                    steps {
                        sh 'docker build -t ${DOCKER_IMAGE_FRONTEND}:${DOCKER_TAG} ./Frontend'
                    }
                }
                stage('ATS Image') {
                    steps {
                        sh 'docker build -t ${DOCKER_IMAGE_ATS}:${DOCKER_TAG} ./Backend/applicant_tracking_system'
                    }
                }
            }
        }

        stage('Push to DockerHub') {
            parallel {
                stage('Push Backend') {
                    steps {
                        sh 'docker push ${DOCKER_IMAGE_BACKEND}:${DOCKER_TAG}'
                    }
                }
                stage('Push Frontend') {
                    steps {
                        sh 'docker push ${DOCKER_IMAGE_FRONTEND}:${DOCKER_TAG}'
                    }
                }
                stage('Push ATS') {
                    steps {
                        sh 'docker push ${DOCKER_IMAGE_ATS}:${DOCKER_TAG}'
                    }
                }
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                sh 'docker-compose down || true'
                sh 'docker-compose up -d'
            }
        }
    }

    post {
        always {
            cleanWs()
        }
        success {
            echo "✅ CI/CD pipeline executed successfully!"
        }
        failure {
            echo "❌ CI/CD pipeline failed!"
        }
    }
}
