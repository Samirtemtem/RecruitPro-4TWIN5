pipeline {
    agent any

    stages {
        stage('Git Checkout') {
            steps {
                script {
                    checkout([
                        $class: 'GitSCM',
                        branches: [[name: 'main']], // Branch name
                        userRemoteConfigs: [[
                            url: 'https://github.com/Samirtemtem/RecruitPro-4TWIN5.git', // GitHub repo URL
                            credentialsId: 'gitt'  // Jenkins credentials ID for GitHub
                        ]]
                    ])
                }
            }
        }

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

    }
}
