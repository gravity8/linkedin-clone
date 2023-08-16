import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBVWeSB81r14zGyQl5blvK_2OuZsiJncfk",
    authDomain: "linkedin-clone-yt-8f979.firebaseapp.com",
    projectId: "linkedin-clone-yt-8f979",
    storageBucket: "linkedin-clone-yt-8f979.appspot.com",
    messagingSenderId: "617711056237",
    appId: "1:617711056237:web:e31dc08e863839b7429664"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();

  export {db, auth}