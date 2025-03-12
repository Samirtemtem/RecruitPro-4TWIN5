pipeline {
    agent any

    tools {
        nodejs 'node'  // Make sure the Node.js version matches the installed version in Jenkins
    }

    environment {
        DOCKER_IMAGE_BACKEND = "ahmedbenhmida/recruitpro-backend"
        DOCKER_IMAGE_FRONTEND = "ahmedbenhmida/recruitpro-frontend"
        DOCKER_TAG = "latest"
    }

    stages {
        stage('Git Checkout') {
            steps {
                script {
                    checkout([
                        $class: 'GitSCM',
                        branches: [[name: 'CI/CD_setup']], // Branch name
                        userRemoteConfigs: [[
                            url: 'https://github.com/Samirtemtem/RecruitPro-4TWIN5.git', // GitHub repo URL
                            credentialsId: 'AhmedBnHmida-GIT'  // Jenkins credentials ID for GitHub
                        ]]
                    ])
                }
            }
        }

        stage('Install Frontend Dependencies') {
            steps {
                dir('Frontend') {
                    sh 'npm install'
                }
            }
        }

        stage('Install Backend Dependencies') {
            steps {
                dir('Backend') {
                    sh 'npm install'



                }
            }
        }

        stage('Build Backend') {
            steps {
                dir('Backend') {
                    script {
                        sh 'npm run build'
                    }
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('Frontend') {
                    script {
                        sh 'CI=false npm run build'
                    }
                }
            }
        }


//we have to add the tests
/*
        stage('Run Unit Tests') {
            steps {
                script {
                    catchError(buildResult: 'FAILURE', stageResult: 'FAILURE') {
                        sh '''
                            cd Backend && npm test
                            cd ../Frontend && npm test
                        '''
                    }
                }
            }
        }
*/
            stage('Backend SonarQube Analysis') {
                steps {
                    script {
                        // Run SonarQube analysis for Backend
                        withSonarQubeEnv('Kaddem-sq') {
                            sh '''
                                cd Backend && npm run sonar
                            '''
                        }
                    }
                }
            }

            stage('Frontend SonarQube Analysis') {
                steps {
                    script {
                        // Run SonarQube analysis for Frontend
                        withSonarQubeEnv('Kaddem-sq') {
                            sh '''
                                cd Frontend && npm run sonar
                            '''
                        }
                    }
                }
            }

            stage('Build Docker Backend Images') {
                steps {
                    sh 'docker build -t ${DOCKER_IMAGE_BACKEND}:${DOCKER_TAG} ./Backend'
                }
            }

            stage('Build Docker Frontend Images') {
                steps {
                    sh 'docker build -t ${DOCKER_IMAGE_FRONTEND}:${DOCKER_TAG} ./Frontend'
                }
            }

             stage('Docker Login') {
                steps {
                    withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                        sh '''
                            echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
                        '''
                    }
                }
            }

            stage('Docker Push Backend') {
                steps {
                    sh '''
                        docker push ${DOCKER_IMAGE_BACKEND}:${DOCKER_TAG}
                    '''
                }
            }

            stage('Docker Push Frontend') {
                steps {
                    sh '''
                        docker push ${DOCKER_IMAGE_BACKEND}:${DOCKER_TAG}
                    '''
                }
            }


//deploying the backend and frontend
/*
            stage('Deploy Backend') {
                steps {
                    sshagent(['recruitpro-ssh']) {
                        sh '''
                            ssh user@localhost << 'EOF'
                                echo "Pulling latest backend Docker image..."
                                docker pull ${DOCKER_IMAGE_BACKEND}:${DOCKER_TAG} || { echo "Docker pull failed"; exit 1; }

                                # Check if backend container exists
                                if docker ps -q --filter "name=backend-container"; then
                                    echo "Stopping and removing existing backend container..."
                                    docker stop backend-container && docker rm backend-container || { echo "Failed to stop/remove backend container"; exit 1; }
                                else
                                    echo "No backend-container to remove."
                                fi

                                echo "Starting new backend container..."
                                docker run -d -p 5000:5000 --name backend-container --restart=always ${DOCKER_IMAGE_BACKEND}:${DOCKER_TAG} || { echo "Docker run failed"; exit 1; }

                                echo "Backend deployment completed successfully!"
                            EOF
                        '''
                    }
                }
            }

            stage('Deploy Frontend') {
                steps {
                    sshagent(['your-server-ssh-credentials']) {
                        sh '''
                        ssh user@your-server << 'EOF'
                            echo "Pulling latest frontend Docker image..."
                            docker pull ${DOCKER_IMAGE_FRONTEND}:${DOCKER_TAG}

                            # Check if frontend container exists
                            if docker ps -q --filter "name=frontend-container"; then
                                echo "Stopping and removing existing frontend container..."
                                docker stop frontend-container && docker rm frontend-container
                            else
                                echo "No frontend-container to remove."
                            fi

                            echo "Starting new frontend container..."
                            docker run -d -p 3000:3000 --name frontend-container --restart=always ${DOCKER_IMAGE_FRONTEND}:${DOCKER_TAG}

                            echo "Frontend deployment completed successfully!"
                        EOF
                        '''
                    }
                }
            }
*/



    }
}