import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
    apiKey: "AIzaSyAM54oziT5-O3Rq9DxBvXbFMTHVuKPsDjg",
    authDomain: "olx-app-aebc6.firebaseapp.com",
    databaseURL: "https://olx-app-aebc6.firebaseio.com",
    projectId: "olx-app-aebc6",
    storageBucket: "olx-app-aebc6.appspot.com",
    messagingSenderId: "957636046818",
    appId: "1:957636046818:web:2f09d299e51acced5d93bb",
    measurementId: "G-J0MB7CTWNS"
  };

var Firebase=firebase.initializeApp(firebaseConfig);
export default Firebase;