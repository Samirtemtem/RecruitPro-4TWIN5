pipeline {
    agent any

    tools {
        nodejs 'node'  // Make sure the Node.js version matches the installed version in Jenkins
    }

    environment {
        DOCKER_IMAGE_BACKEND = "ahmedbenhmida/recruitpro-backend"
        DOCKER_IMAGE_FRONTEND = "ahmedbenhmida/recruitpro-frontend"
        DOCKER_TAG = "latest"
        NEXUS_URL = "http://localhost:8081/repository/npm-releases"  // Nexus repository URL for npm packages
        BACKEND_PACKAGE_NAME = "recruitpro-backend"
        FRONTEND_PACKAGE_NAME = "recruitpro-frontend"
        VERSION = "1.0.0"
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

        stage('Install Frontend & Backend Dependencies') {
            parallel {
                frontend: {
                    dir('Frontend') {
                        sh 'npm install'
                    }
                },
                backend: {
                    dir('Backend') {
                        sh 'npm install'
                    }
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


        //we have to add the classes tests
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

        stage('Package Backend for Nexus') {
            steps {
                dir('Backend') {
                    script {
                        // Package the backend for Nexus
                        sh 'npm pack'  // Create a tarball of the backend (e.g., backend-1.0.0.tgz)
                        sh '''
                            curl -u admin:nexus -X POST \
                            -F "file=@recruitpro-backend-1.0.0.tgz" \
                            ${NEXUS_URL}/com/recruitpro/${BACKEND_PACKAGE_NAME}/${VERSION}/${BACKEND_PACKAGE_NAME}-${VERSION}.tgz
                        '''
                    }
                }
            }
        }

        stage('Package Frontend for Nexus') {
            steps {
                dir('Frontend') {
                    script {
                        // Package the frontend for Nexus (e.g., static assets as a tarball or zip)
                        sh 'tar -czf frontend-1.0.0.tar.gz build/'
                        sh '''
                            curl -u admin:nexus -X POST \
                            -F "file=@frontend-1.0.0.tar.gz" \
                            ${NEXUS_URL}/com/recruitpro/${FRONTEND_PACKAGE_NAME}/${VERSION}/${FRONTEND_PACKAGE_NAME}-${VERSION}.tar.gz
                        '''
                    }
                }
            }
        }

        stage('Download Backend from Nexus') {
            steps {
                script {
                    // Download the backend tarball from Nexus
                    sh '''
                        wget --http-user=admin --http-password=nexus \
                        -O target/${BACKEND_PACKAGE_NAME}-${VERSION}.tgz \
                        ${NEXUS_URL}/com/recruitpro/${BACKEND_PACKAGE_NAME}/${VERSION}/${BACKEND_PACKAGE_NAME}-${VERSION}.tgz
                    '''
                }
            }
        }

        stage('Download Frontend from Nexus') {
            steps {
                script {
                    // Download the frontend tarball from Nexus
                    sh '''
                        wget --http-user=admin --http-password=nexus \
                        -O target/${FRONTEND_PACKAGE_NAME}-${VERSION}.tar.gz \
                        ${NEXUS_URL}/com/recruitpro/${FRONTEND_PACKAGE_NAME}/${VERSION}/${FRONTEND_PACKAGE_NAME}-${VERSION}.tar.gz
                    '''
                }
            }
        }

        stage('Build Docker Backend Image') {
            steps {
                script {
                    // Extract the backend package and build Docker image
                    sh 'tar -xzvf target/${BACKEND_PACKAGE_NAME}-${VERSION}.tgz -C ./Backend'
                    sh '''
                        docker build -t ${DOCKER_IMAGE_BACKEND}:${DOCKER_TAG} -f Dockerfile.backend .
                    '''
                }
            }
        }

        stage('Build Docker Frontend Image') {
            steps {
                script {
                    // Extract the frontend tarball and build Docker image
                    sh 'tar -xzvf target/${FRONTEND_PACKAGE_NAME}-${VERSION}.tar.gz -C ./Frontend'
                    sh '''
                        docker build -t ${DOCKER_IMAGE_FRONTEND}:${DOCKER_TAG} -f Dockerfile.frontend .
                    '''
                }
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

        stage('Push Docker Images to DockerHub') {
            steps {
                sh 'docker push ${DOCKER_IMAGE_BACKEND}:${DOCKER_TAG}'
                sh 'docker push ${DOCKER_IMAGE_FRONTEND}:${DOCKER_TAG}'
            }
        }

        stage('Deploy Backend') {
            steps {
                script {
                    def containerExists = sh(script: "docker ps -q -f name=backend-container", returnStdout: true).trim()

                    if (containerExists) {
                        sh 'docker stop backend-container && docker rm backend-container'
                    }

                    sh "docker run -d -p 5000:5000 --name backend-container --restart=always ${DOCKER_IMAGE_BACKEND}:${DOCKER_TAG}"
                }
            }
        }

        stage('Deploy Frontend') {
            steps {
                script {
                    def containerExists = sh(script: "docker ps -q -f name=frontend-container", returnStdout: true).trim()

                    if (containerExists) {
                        sh 'docker stop frontend-container && docker rm frontend-container'
                    }

                    sh "docker run -d -p 3000:3000 --name frontend-container --restart=always ${DOCKER_IMAGE_FRONTEND}:${DOCKER_TAG}"
                }
            }
            }

/*
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
*/

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
