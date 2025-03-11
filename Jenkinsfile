pipeline {
    agent any

    tools {
        nodejs 'node'  // Make sure the Node.js version matches the installed version in Jenkins
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

        stage('Install & Build Backend') {
            steps {
                script {
                    sh '''
                        cd Backend && npm install && npm run build
                    '''
                }
            }
        }

        stage('Install & Build Frontend') {
            steps {
                script {
                    sh '''
                        cd Frontend && npm install && npm run build
                    '''
                }
            }
        }
/*
        stage('Install Dependencies') {
            steps {
                script {
                    sh '''
                        cd Backend && npm install
                        cd ../Frontend && npm install
                    '''
                }
            }
        }
*/
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

        stage('SonarQube Analysis') {
            steps {
                script {
                    // Run SonarQube analysis
                    withSonarQubeEnv(Kaddem-sq) {
                        sh '''
                            cd Backend && npm run sonar
                            cd ../Frontend && npm run sonar
                        '''
                    }
                }
            }
        }

    }
}
