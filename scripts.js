// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getDatabase, set, get, update, remove, ref, child } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANDRn90JnraeWi5mxxnmV_Als5yFUTzLI",
  authDomain: "profile-app-e25e7.firebaseapp.com",
  databaseURL: "https://profile-app-e25e7-default-rtdb.firebaseio.com",
  projectId: "profile-app-e25e7",
  storageBucket: "profile-app-e25e7.appspot.com",
  messagingSenderId: "440494603149",
  appId: "1:440494603149:web:9d75e85607159137d09bc4",
  measurementId: "G-G2HZFFNPM4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();

// Buttons
var insertBtn = document.querySelector("#insert");
var updateBtn = document.querySelector("#update");
var removeBtn = document.querySelector("#remove");
var findBtn = document.querySelector("#find");


var enterID = document.querySelector("#enterID");
var enterName = document.querySelector("#enterName");
// Other code for writing data to the database ~ implement later


// Read data from the database
var findID = document.querySelector("#findID");
var findName = document.querySelector("#findName");
var findPic = document.getElementById("findPic");

function findData() {
  const dbRef = ref(db);
  get(child(dbRef, "users/" +findID.value)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      findName.innerHTML = "Name: "+ snapshot.val().name;
      findPic.firstChild.src = snapshot.val().image;
    } else {
      console.log("No data available");
    }
    
  }).catch((error) => {
    console.error(error);
  });
}


// Event listeners
insertBtn.addEventListener('click', insertData);
updateBtn.addEventListener('click', updateData);
removeBtn.addEventListener('click', removeData);
findBtn.addEventListener('click', findData);
