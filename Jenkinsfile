pipeline {
    agent { label 'MyAgent' }
    
    environment {
        IMAGE_NAME = 'foodexpress-api'
        CONTAINER_NAME = 'foodexpress'
    }
    
    stages {
        stage('Clone Repository') {
            steps {
                echo 'Cloning repository...'
                git branch: 'main', url: 'https://github.com/catboy16669/Assignment-3-Midterm-Project.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t ${IMAGE_NAME}:latest .'
            }
        }
        stage('Deploy Container') {
            steps {
                echo 'Deploying container...'
                sh '''
                    docker stop ${CONTAINER_NAME} || true
                    docker rm ${CONTAINER_NAME} || true
                    docker run -d -p 3000:3000 --name ${CONTAINER_NAME} ${IMAGE_NAME}:latest
                '''
            }
        }
        stage('Verify') {
            steps {
                echo 'Verifying container is running...'
                sh 'docker ps | grep ${CONTAINER_NAME}'
            }
        }
    }
    post {
        success {
            echo "✅ Pipeline completed successfully! API running on port 3000"
        }
        failure {
            echo "❌ Build Failed! Check logs above."
        }
    }
}
