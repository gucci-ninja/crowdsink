const firebase = require('firebase');
const config = {
    apiKey: "AIzaSyC8WXcfYkMiDiHRevXydLIPhIjKcAzwp9Y",
    authDomain: "yhacktest-ad5b9.firebaseapp.com",
    databaseURL: "https://yhacktest-ad5b9.firebaseio.com",
    projectId: "yhacktest-ad5b9",
    storageBucket: "yhacktest-ad5b9.appspot.com",
    messagingSenderId: "41980360139",
    appId: "1:41980360139:web:15938c35f124bd7f7e324e",
    measurementId: "G-L3J20K0RN8"
  };
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });
export default firebaseApp.firestore();