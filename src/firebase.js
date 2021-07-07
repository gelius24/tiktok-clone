import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDNre080woNC1mIQQGstcnoP9WLswJi1AQ",
    authDomain: "tiktok-clone-af4ae.firebaseapp.com",
    projectId: "tiktok-clone-af4ae",
    storageBucket: "tiktok-clone-af4ae.appspot.com",
    messagingSenderId: "71171296122",
    appId: "1:71171296122:web:e37f7bab5d5d2742fe64c3",
    measurementId: "G-0T29Q1PN6R"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  
  const db = firebaseApp.firestore()

  export default db;