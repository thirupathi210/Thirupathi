import firebase from 'firebase';
import 'firebase/auth';
var firebaseConfig = {
    apiKey: "AIzaSyC7eAVvYCwArUr1X8WHvVDpfSGtLY6hTxc",
    authDomain: "fir-24a30.firebaseapp.com",
    databaseURL: "https://fir-24a30-default-rtdb.firebaseio.com",
    projectId: "fir-24a30",
    storageBucket: "fir-24a30.appspot.com",
    messagingSenderId: "835187779392",
    appId: "1:835187779392:web:22b69448f4a3060e283ca5",
    high:'64,642.64986' 
  }; 
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//5-128=640
//1-35=35
//2-195=384   
export default firebase;