import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA4Q8kvGGnwb3mMqnS6tU8CsXt6hHGe9Os",
  authDomain: "pet-api-b63be.firebaseapp.com",
  databaseURL: "https://pet-api-b63be.firebaseio.com",
  projectId: "pet-api-b63be",
  storageBucket: "pet-api-b63be.appspot.com",
  messagingSenderId: "1075343345547",
  appId: "1:1075343345547:web:52ace95b1625241ba1918e",
  measurementId: "G-V9Z76ZSS57",
};
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
