pipeline {
    agent any

    tools {
        nodejs 'node'
    }

    environment {
        DOCKER_IMAGE_BACKEND = "ahmedbenhmida/recruitpro-backend"
        DOCKER_IMAGE_FRONTEND = "ahmedbenhmida/recruitpro-frontend"
        DOCKER_IMAGE_ATS = "ahmedbenhmida/recruitpro-ats"
        DOCKER_TAG = "latest"
        VERSION = "1.0.0"  // Change this to the version of your app (can be dynamically generated)
        NEXUS_URL = "http://localhost:8081/repository/docker-releases"  // Nexus URL
        NODE_ENV = 'production'
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
                            //sh 'npm install --force'
                            sh 'npm install --legacy-peer-deps'
                        }
                    }
                }
                stage('Backend') {
                    steps {
                        dir('Backend') {
                            //sh 'npm install --force'
                            sh 'npm install --legacy-peer-deps'
                        }
                    }
                }
                stage('ATS') {
                    steps {
                        dir('Backend/applicant_tracking_system') {
                            sh '''
                                /usr/bin/python3 -m venv venv
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
                withSonarQubeEnv('sq') {
                    dir('Frontend') {
                        sh 'npm run sonar || echo "SonarQube analysis failed for Frontend"'
                    }
                    dir('Backend') {
                        sh 'npm run sonar || echo "SonarQube analysis failed for Backend"'
                    }
                    dir('Backend/applicant_tracking_system') {
                        sh 'pylint *.py || echo "Pylint failed for ATS"'
                        sh 'sonar-scanner || echo "SonarQube analysis failed for ATS"'
                    }
                }
            }
        }
*/
        stage('Cleanup Old Docker Images and Containers') {
            steps {
                sh '''
                    echo "🧹 Cleaning up old Docker containers if they exist..."

                    docker ps -aq --filter "name=recruitpro_backend" | grep -q . && docker rm -f recruitpro_backend || true
                    docker ps -aq --filter "name=recruitpro_frontend" | grep -q . && docker rm -f recruitpro_frontend || true
                    docker ps -aq --filter "name=recruitpro_ats" | grep -q . && docker rm -f recruitpro_ats || true

                    echo "🧹 Cleaning up old Docker images if they exist..."

                    docker images -q ${DOCKER_IMAGE_BACKEND}:${DOCKER_TAG} | grep -q . && docker rmi -f ${DOCKER_IMAGE_BACKEND}:${DOCKER_TAG} || true
                    docker images -q ${DOCKER_IMAGE_FRONTEND}:${DOCKER_TAG} | grep -q . && docker rmi -f ${DOCKER_IMAGE_FRONTEND}:${DOCKER_TAG} || true
                    docker images -q ${DOCKER_IMAGE_ATS}:${DOCKER_TAG} | grep -q . && docker rmi -f ${DOCKER_IMAGE_ATS}:${DOCKER_TAG} || true
                '''
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
                stage('Build Backend Docker Image') {
                    steps {
                        sh 'docker build -t ${DOCKER_IMAGE_BACKEND}:${DOCKER_TAG} ./Backend'
                    }
                }
                stage('Build Frontend Docker Image') {
                    steps {
                        sh 'docker build -t ${DOCKER_IMAGE_FRONTEND}:${DOCKER_TAG} ./Frontend'
                    }
                }
                stage('Build ATS Docker Image') {
                    steps {
                        sh 'docker build -t ${DOCKER_IMAGE_ATS}:${DOCKER_TAG} ./Backend/applicant_tracking_system'
                    }
                }
            }
        }

/*
        stage('Upload to Nexus') {
            parallel {
                stage('Push Backend Image to Nexus') {
                    steps {
                        script {
                            // Tag and push Backend Docker image to Nexus with the version tag
                            sh "docker tag ${DOCKER_IMAGE_BACKEND}:${DOCKER_TAG} ${NEXUS_URL}/${DOCKER_IMAGE_BACKEND}:${VERSION}"
                            sh "docker push ${NEXUS_URL}/${DOCKER_IMAGE_BACKEND}:${VERSION}"
                        }
                    }
                }
                stage('Push Frontend Image to Nexus') {
                    steps {
                        script {
                            // Tag and push Frontend Docker image to Nexus with the version tag
                            sh "docker tag ${DOCKER_IMAGE_FRONTEND}:${DOCKER_TAG} ${NEXUS_URL}/${DOCKER_IMAGE_FRONTEND}:${VERSION}"
                            sh "docker push ${NEXUS_URL}/${DOCKER_IMAGE_FRONTEND}:${VERSION}"
                        }
                    }
                }
                stage('Push ATS Image to Nexus') {
                    steps {
                        script {
                            // Tag and push ATS Docker image to Nexus with the version tag
                            sh "docker tag ${DOCKER_IMAGE_ATS}:${DOCKER_TAG} ${NEXUS_URL}/${DOCKER_IMAGE_ATS}:${VERSION}"
                            sh "docker push ${NEXUS_URL}/${DOCKER_IMAGE_ATS}:${VERSION}"
                        }
                    }
                }
            }
        }
*/
        stage('Push to DockerHub') {
            parallel {
                stage('Push Backend Image') {
                    steps {
                        sh 'docker push ${DOCKER_IMAGE_BACKEND}:${DOCKER_TAG}'
                    }
                }
                stage('Push Frontend Image') {
                    steps {
                        sh 'docker push ${DOCKER_IMAGE_FRONTEND}:${DOCKER_TAG}'
                    }
                }
                stage('Push ATS Image') {
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
/*
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
*/
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