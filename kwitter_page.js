//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyC5vcH8B8Z9rfrgkR5I0Hj-G2LhzpaJGT8",
    authDomain: "kwitter-60f15.firebaseapp.com",
    databaseURL: "https://kwitter-60f15-default-rtdb.firebaseio.com",
    projectId: "kwitter-60f15",
    storageBucket: "kwitter-60f15.appspot.com",
    messagingSenderId: "265693888424",
    appId: "1:265693888424:web:e8aa918f71b9a05036e79d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message:msg,
        like: 0
   
    });
    document.getElementById("msg").value = "";
      }

      
  