pipeline{
    agent any
    stages{
        stage('Checkout'){
            steps{
                git branch: 'main'
                urls:'https://github.com/AbdulMufeedS/modellab.git'
            }
        }
        stage('Install'){
            steps{
                bat 'npm install'
            }
        }
        stage('Build'){
            steps{
                bat 'npm run build'
            }
        }
    }
}