const firebaseConfig = {
    apiKey: "AIzaSyBB5UqUrN3-BLcmL2ek3XfZ9OFkRv18Jhc",
    authDomain: "seniors-go-digital-9efda.firebaseapp.com",
    projectId: "seniors-go-digital-9efda",
    storageBucket: "seniors-go-digital-9efda.appspot.com",
    messagingSenderId: "248625037252",
    appId: "1:248625037252:web:cbbcbd28ffc99acc832e91",
    measurementId: "G-GZZQSHK7XD"
  };
  
    // Initialize Firebase
  var app = firebase.initializeApp(firebaseConfig);
  var database = app.firestore();