pipeline {
    agent any

    environment {
        FIREBASE_TOKEN = credentials("Firebase")
    }

    stages {
        stage("build") {
            steps {
                 nodejs(nodeJSInstallationName: 'Nodejs_16') {
                    sh 'npm install --global yarn'
                    sh 'yarn install'
                    sh 'yarn build'
                 }
            }
        }
        stage("deploy") {
            steps {
                nodejs(nodeJSInstallationName: "Nodejs_16") {
                    sh 'yarn global add firebase-tools@9.14.0'
                    sh 'firebase deploy --token $FIREBASE_TOKEN'
                }
            }
        }
    }
}
