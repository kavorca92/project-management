import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyC6k0I-QHiYxuIG1VjtXIIIW_miAehHDP4",
    authDomain: "project-course-test.firebaseapp.com",
    projectId: "project-course-test",
    storageBucket: "project-course-test.appspot.com",
    messagingSenderId: "957050484987",
    appId: "1:957050484987:web:402ba060cc359caaecd85e"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }