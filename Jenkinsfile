pipeline {
    agent {
        docker { image 'node' }
    }

    stages {
        stage("build") {
            steps {
                echo 'building....'
                sh 'npm install --global yarn'
            }
        }
    }
}
