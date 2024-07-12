pipeline {
    agent any

    parameters {
        string(name: 'SPEC', defaultValue: "cypress/e2e/**/**", description: "Enter the path of the scripts you want to execute")
        choice(name: 'BROWSER', choices: ['chrome', 'edge'], description: "Choose the browser where you want to execute your scripts")
    }

    options {
        ansiColor('xterm')
    }

    stages {
        stage('Building') {
            steps {
                echo "Building the application"
                // Coloque aqui os comandos reais de construção, se necessário
            }
        }
        stage('Testing') {
            steps {
                bat "npm i"
                bat "npx cypress run --browser ${params.BROWSER} --spec ${params.SPEC}"
            }
        }
        stage('Deploying') {
            steps {
                echo "Deploying the application"
                // Coloque aqui os comandos reais de implantação, se necessário
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
                    // Copia manualmente o diretório para verificar permissões e caminhos
                    bat "mkdir -p ${targetDir}"
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
