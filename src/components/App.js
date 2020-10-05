import React, { useState, useEffect } from "react";
import Content from "./Content";
// import Footer from "./Footer";
// import Header from "./Header";
import fire from "../firebase";
import axios from "../apis/axios";
import "./App.css";
import SignIn from "./SignIn";

const App = () => {
  const [message, setMessage] = useState("");
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const clearFields = () => {
    setEmail("");
    setPassword("");
    setMessage("");
  };
  const handleLogIn = () => {
    clearFields();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => setMessage(err.message));
    // .catch((err) => console.log(err));
  };
  const handleSignUp = () => {
    clearFields();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => setMessage(err.message));
  };
  const handleLogOut = () => {
    fire.auth().signOut();
  };
  const authListener = () => {
    clearFields();
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser("");
      }
    });
  };
  useEffect(() => {
    clearFields();
    handleLogOut();
    authListener();
  }, []);
  const onSubmit = async (id, name) => {
    const user = {
      id,
      name,
    };
    const response = await axios.post(`/pet`, user);

    if (response.status === 200) {
      setMessage("Request Successful!");
      // this.apiGetRequest(id);
    } else {
      setMessage("Some Error Occured!");
    }
  };
  // const apiGetRequest = async (id) => {
  //   const response = await axios.get(`/pet/${id}`);
  // };
  return (
    <div>
      {user ? (
        <Content
          onSubmit={(id, name) => onSubmit(id, name)}
          email={user.email}
          passwordMain={password}
          messageMain={message}
          setPasswordMain={setPassword}
          hasAccount={hasAccount}
          handleLogOut={handleLogOut}
        />
      ) : (
        <SignIn
          email={email}
          passwordMain={password}
          messageMain={message}
          setEmail={setEmail}
          setPasswordMain={setPassword}
          handleLogIn={handleLogIn}
          handleSignUp={handleSignUp}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
        />
      )}
    </div>
  );
};

export default App;
