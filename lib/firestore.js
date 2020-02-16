import firebase from 'firebase'
import 'firebase/firestore'
// Required for side-effects

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyAgzIZnaZedEhINH_V3_q2sQsYJuURrq3k',
  // authDomain: '### FIREBASE AUTH DOMAIN ###',
  projectId: 'flowerpot-e8280'
})

var db = firebase.firestore()
