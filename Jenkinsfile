pipeline {
    agent any

    environment {
        FIREBASE_TOKEN = credentials("firebase")
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
                    sh 'firebase deploy --token $FIREBASE_TOKEN'
                }
            }
        }
    }
}
