pipeline {
    agent any

    options {
        ansiColor('xterm')
    }

    parameters {
        string(name: 'SPEC', defaultValue: "cypress/e2e/**/**", description: "Enter the path of the scripts you want to execute")
        choice(name: 'BROWSER', choices: ['chrome', 'edge'], description: "Choose the browser where you want to execute your scripts")
    }

    stages {
        stage('Building') {
            steps {
                echo "Building the application"
            }
        }
        stage('Testing') {
            steps {
                bat "npm i"
                bat "npm run cy:run --browser ${params.BROWSER} --spec ${params.SPEC}"
            }
        }
        stage('Deploying') {
            steps {
                echo "Deploying the application"
            }
        }
    }

    post {
        always {
           publishHTML([allowMissing: false, alwaysLinkToLastBuild: true, keepAll: true, reportDir: 'cypress/report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        }
    }
}
