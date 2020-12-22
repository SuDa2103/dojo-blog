import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBDP65A7iAd8-x0NaXYWQVYeIhO8lfmCbE",
    authDomain: "udemy-vue-blog-6e46b.firebaseapp.com",
    projectId: "udemy-vue-blog-6e46b",
    storageBucket: "udemy-vue-blog-6e46b.appspot.com",
    messagingSenderId: "85630523171",
    appId: "1:85630523171:web:3e8e62c84f151c8d2f9e96"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)

  // init firestore service
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectFirestore, timestamp }