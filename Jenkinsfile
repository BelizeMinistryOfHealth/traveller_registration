pipeline {
    agent any

    stages {
        stage("build") {
            steps {
                 nodejs(nodeJSInstallationName: 'Nodejs_18') {
                    sh 'npm install --global yarn'
                 }
            }
        }
    }
}
