pipeline {
    agent any

    stages {
        stage("build") {
            steps {
                 nodejs(nodeJSInstallationName: 'Nodejs 18.10') {
                    sh 'npm config ls'
                 }
            }
        }
    }
}
