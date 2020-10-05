import React, { useState, useEffect } from "react";
import Content from "./Content";
import fire from "../firebase";
import axios from "../apis/axios";
import "./App.css";
import SignIn from "./SignIn";

const App = () => {
  // States
  const [message, setMessage] = useState("");
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  // Clear fields function
  const clearFields = () => {
    setEmail("");
    setPassword("");
    setMessage("");
  };

  // Handle login
  const handleLogIn = () => {
    clearFields();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => setMessage(err.message));
  };

  // Handle signup
  const handleSignUp = () => {
    clearFields();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => setMessage(err.message));
  };

  // Handle logout
  const handleLogOut = () => {
    fire.auth().signOut();
  };

  // Eventlistener for changes in auth
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

  // useEffect to set the initial state of component
  useEffect(() => {
    clearFields();
    handleLogOut();
    authListener();
  }, []);

  // API call using instance of axios
  const onSubmit = async (id, name) => {
    const user = {
      id,
      name,
    };
    const response = await axios.post(`/pet`, user);

    if (response.status === 200) {
      setMessage("Request Successful!");
      // Get request when request is successful
      this.apiGetRequest(id);
    } else {
      setMessage("Some Error Occured!");
    }
  };
  // Function for get request
  const apiGetRequest = async (id) => {
    const response = await axios.get(`/pet/${id}`);
  };
  // Return on DOM
  return (
    // Condition to see if user exists
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
