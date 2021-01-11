import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyBevDnFW_8QV7ydcIClGeZfIrZJh3J_fWI",
  authDomain: "career-tinder.firebaseapp.com",
  databaseURL: "https://career-tinder.firebaseio.com",
  projectId: "career-tinder",
  storageBucket: "career-tinder.appspot.com",
  messagingSenderId: "430287319970",
  appId: "1:430287319970:web:630a3cd4111782b0"
  /*apiKey: "AIzaSyDaxtVjRjNg4EiJNzdELahMumkiu1fCKD8",
  authDomain: "staging-career-tinder.firebaseapp.com",
  databaseURL: "https://staging-career-tinder.firebaseio.com",
  projectId: "staging-career-tinder",
  storageBucket: "staging-career-tinder.appspot.com",
  messagingSenderId: "31975902829",
  appId: "1:31975902829:web:099312cceba4c47d"*/
};
firebase.initializeApp(config);
firebase.firestore().settings({});

export default firebase;


// import firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";

// var config = {
//   apiKey: "AIzaSyAOLztdE6EmRECIaoZhqlT2Zsxp5FVpSZ8",
//   authDomain: "jobble-85ef3.firebaseapp.com",
//   projectId: "jobble-85ef3",
//   storageBucket: "jobble-85ef3.appspot.com",
//   messagingSenderId: "347449469619",
//   appId: ":347449469619:web:75fb5fb0ad31dd71949ec6"
// };
// firebase.initializeApp(config);
// firebase.firestore().settings({});

// export default firebase;
