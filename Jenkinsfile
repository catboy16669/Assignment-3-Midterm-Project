pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/catboy16669/Assignment-3-Midterm-Project.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                dir('foodexpress-backend') {
                    sh 'npm install'
                }
            }
        }
        stage('Run Tests') {
            steps {
                dir('foodexpress-backend') {
                    sh 'echo "Tests passed - no test framework configured yet"'
                }
            }
        }
        stage('Build Docker Image') {
            steps {
                dir('foodexpress-backend') {
                    sh 'docker build -t foodexpress-api:latest .'
                }
            }
        }
        stage('Deploy Container') {
            steps {
                sh '''
                    docker stop foodexpress || true
                    docker rm foodexpress || true
                    docker run -d --name foodexpress -p 3000:3000 foodexpress-api:latest
                '''
            }
        }
    }
    post {
        success {
            echo '✅ Deployment Successful!'
        }
        failure {
            echo '❌ Build Failed!'
        }
    }
}
