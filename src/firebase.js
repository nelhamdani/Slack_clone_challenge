import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB5cmTe70_z1tzZXPi2zAO-ojWkvkmpmfk",
    authDomain: "slack-clone-dc152.firebaseapp.com",
    projectId: "slack-clone-dc152",
    storageBucket: "slack-clone-dc152.appspot.com",
    messagingSenderId: "341269770293",
    appId: "1:341269770293:web:f619ce8046f2d0f7fec17c"
  };

  const firebeseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export default db;
  export {auth, provider}