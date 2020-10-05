import React from "react";
import Footer from "./Footer";
import "./SignIn.css";
import { useDispatch } from "react-redux";
import { setEmailToState, setPasswordToState } from "../actions";

const SignIn = (props) => {
  // Destructuring props
  const {
    email,
    passwordMain,
    messageMain,
    setEmail,
    setPasswordMain,
    handleLogIn,
    handleSignUp,
    hasAccount,
    setHasAccount,
  } = props;

  // Initializing dispatch function
  const dispatch = useDispatch();

  // Toggle between signup and login
  const onClickHandler = (e) => {
    setHasAccount(!hasAccount);
  };

  // Handle after submit
  const onSubmitHandler = (e) => {
    dispatch(setEmailToState(email));
    dispatch(setPasswordToState(passwordMain));
  };

  return (
    <div className="signin-body">
      <div className="container-box">
        <div className="heading">Register or Login</div>
        <form className="form">
          {/* Setting emil to state */}
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          {/* Setting password to state */}
          <label>Password:</label>
          <input
            type="password"
            value={passwordMain}
            onChange={(e) => setPasswordMain(e.target.value)}
          />
        </form>

        {/* Toggle between login and signup */}
        <div className="button-container">
          {hasAccount ? (
            // If user has account
            <div>
              <button
                onClick={(e) => {
                  handleLogIn();
                  onSubmitHandler(e);
                }}
              >
                Log In
              </button>
              <p>
                Don't have an account ?
                <span onClick={(e) => onClickHandler(e)}>Sign Up</span>
              </p>
            </div>
          ) : (
            // If user does not have account (Default case)
            <div>
              <button
                onClick={(e) => {
                  handleSignUp();
                  onSubmitHandler(e);
                }}
              >
                Sign Up
              </button>
              <p>
                Have an account?
                <span onClick={(e) => onClickHandler(e)}>Log In</span>
              </p>
            </div>
          )}
        </div>
        {/* Message to be displayed */}
        <div className="message1">{messageMain}</div>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
