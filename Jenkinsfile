pipeline {
    agent any

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
                script {
                    try {
                        bat "npm i"
                        bat "npx cypress run --browser ${params.BROWSER} --spec ${params.SPEC}"
                    } catch (Exception e) {
                        error "Failed to run Cypress tests: ${e}"
                    }
                }
            }
        }
        stage('Verifying Report') {
            steps {
                script {
                    def reportDir = 'cypress/report'
                    def reportFile = "${reportDir}/index.html"
                    
                    bat "dir ${reportDir} /b"
                    
                    if (fileExists(reportFile)) {
                        echo "HTML report file exists: ${reportFile}"
                    } else {
                        error "HTML report file does not exist: ${reportFile}"
                    }
                }
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
            script {
                def reportDir = 'cypress/report'
                def reportFile = "${reportDir}/index.html"
                def targetDir = "C:\\Users\\barbo\\.jenkins\\jobs\\CypressCICD\\builds\\${env.BUILD_NUMBER}\\htmlreports\\HTML_20Report"
                
                if (fileExists(reportFile)) {
                    echo "HTML report file exists: ${reportFile}"
                    bat "mkdir ${targetDir}"
                    bat "xcopy ${reportDir} ${targetDir} /E /I /Y"
                } else {
                    error "HTML report file does not exist: ${reportFile}"
                }
            }

            publishHTML(
                allowMissing: false,
                alwaysLinkToLastBuild: false,
                keepAll: true,
                reportDir: 'cypress/report',
                reportFiles: 'index.html',
                reportName: 'HTML Report',
                reportTitles: ''
            )
        }
    }
}
