import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyABZAuJ8J65T18p0Tnv6cUa5CGp0OmcBnU",
    authDomain: "facebook-clone-akky.firebaseapp.com",
    databaseURL: "https://facebook-clone-akky.firebaseio.com",
    projectId: "facebook-clone-akky",
    storageBucket: "facebook-clone-akky.appspot.com",
    messagingSenderId: "717944431848",
    appId: "1:717944431848:web:0429c809b0428f944e155d",
    measurementId: "G-Z45LEEEH9N"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider} 
  export default db
