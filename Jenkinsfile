pipeline{

    agent any

    parameters{
        string(name: 'SPEC', defaultValue: "cypress/e2e/**/**", description: " Enter the scripts path that you want to execute")
        choice(name: 'BROWSER', choices: ['chrome', 'edge'], description: "Choice the browser where you want to execute tour scripts")
    }

    options{
        ansiColor('xterm')
    }

    stages{
        stage('Building'){
            echo "Building the applicaton"
        }
        stage('Testing'){
            steps{
                bat "npm i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
            stage('Deploying'){
                echo "Deploying the application"
            }
        }
    }

    post{
        always{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        }
    }
}
