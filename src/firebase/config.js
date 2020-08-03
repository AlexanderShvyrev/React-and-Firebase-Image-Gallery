import * as firebase from 'firebase/app';
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDPHSC0zEJN74SPvrI4F024V7QA7erl-pI",
    authDomain: "fir-image-gallery-32079.firebaseapp.com",
    databaseURL: "https://fir-image-gallery-32079.firebaseio.com",
    projectId: "fir-image-gallery-32079",
    storageBucket: "fir-image-gallery-32079.appspot.com",
    messagingSenderId: "1006753590031",
    appId: "1:1006753590031:web:0f69543bb8febff5c02c7a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp }