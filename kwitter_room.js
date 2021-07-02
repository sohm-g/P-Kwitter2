var firebaseConfig = {
      apiKey: "AIzaSyDWeRJ05tGD-8kZCusiNpdZFL61r2W7gN4",
      authDomain: "kwitter-2f6dc.firebaseapp.com",
      databaseURL: "https://kwitter-2f6dc-default-rtdb.firebaseio.com",
      projectId: "kwitter-2f6dc",
      storageBucket: "kwitter-2f6dc.appspot.com",
      messagingSenderId: "463840082409",
      appId: "1:463840082409:web:fe4dae6ea96a147d07b378",
      measurementId: "G-2SXX0GH2DD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = " Welcome " + user_name + " !";

