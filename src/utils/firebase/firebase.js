// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAUzSfYYWKuH23DdzXc6yvOCDm5YGqz3-Q",
    authDomain: "james-bot-1007.firebaseapp.com",
    projectId: "james-bot-1007",
    storageBucket: "james-bot-1007.appspot.com",
    messagingSenderId: "72063808688",
    appId: "1:72063808688:web:b44603ed5a7e6aef207775"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

module.exports = {
    app,
    db
}