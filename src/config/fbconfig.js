import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyARtUQtyFFdqRvHogngaIgpFnZoZ5wW2eQ",
    authDomain: "glindicator.firebaseapp.com",
    databaseURL: "https://glindicator.firebaseio.com",
    projectId: "glindicator",
    storageBucket: "glindicator.appspot.com",
    messagingSenderId: "438498591050",
    appId: "1:438498591050:web:c713a3bcae978425ff41b3",
    measurementId: "G-3847BGZ72L"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;