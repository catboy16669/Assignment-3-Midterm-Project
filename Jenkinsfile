pipeline {
    agent { label 'MyAgent' } // <- change this to your Agent's label

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/catboy16669/Assignment-3-Midterm-Project.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Run npm install in the root folder where package.json is
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                // If you have no test framework, just echo
                sh 'echo Tests passed - no test framework configured yet'
            }
        }

        stage('Build Docker Image') {
            steps {
                // Dockerfile is in the root folder
                sh 'docker build -t foodexpress-api:latest .'
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                docker stop foodexpress || true
                docker rm foodexpress || true
                docker run -d -p 3000:3000 --name foodexpress foodexpress-api:latest
                '''
            }
        }

    }

    post {
        success {
            echo "✅ Pipeline completed successfully!"
        }
        failure {
            echo "❌ Build Failed!"
        }
    }
}
