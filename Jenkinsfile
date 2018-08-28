node {

    stage('Checkout') {
        checkout scm
          echo 'Checkout Successfull'
    }
    stage('NPM Init') {
       //  bat 'rm -rf target'
                      //  bat 'npm cache clean'
                        // disabling running postinstall script in dependency packages
                    // Enable below to install node modules
                    //    bat 'npm install --ignore-scripts'
                     //   bat 'npm update && npm dedupe'

       echo 'NPM Init Successfull'
    }
    stage('Test') {
     bat 'npm start'
       echo 'Test Successfull'
    }
    stage('Deploy') {
       echo 'Deploy Successfull'
    }
}
