importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

firebase.initializeApp({
    apiKey: "AIzaSyDkf01Oaau8wzBS17PXtAEf3sxKYOuyRqY",
    authDomain: "ssi-project-feeca.firebaseapp.com",
    projectId: "ssi-project-feeca",
    storageBucket: "ssi-project-feeca.appspot.com",
    messagingSenderId: "350716247118",
    appId: "1:350716247118:web:7be921072a87dffa93971f",
    measurementId: "G-7L1F75BT31"
})

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});