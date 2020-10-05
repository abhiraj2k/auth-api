import React from "react";
import Footer from "./Footer";
import "./SignIn.css";
import { useDispatch } from "react-redux";
import { setEmailToState, setPasswordToState } from "../actions";

const SignIn = (props) => {
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

  const dispatch = useDispatch();

  const onClickHandler = (e) => {
    setHasAccount(!hasAccount);
  };

  const onSubmitHandler = (e) => {
    dispatch(setEmailToState(email));
    dispatch(setPasswordToState(passwordMain));
  };

  return (
    <div className="signin-body">
      <div className="container-box">
        <div className="heading">Register or Login</div>
        <form className="form">
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label>Password:</label>
          <input
            type="password"
            value={passwordMain}
            onChange={(e) => setPasswordMain(e.target.value)}
          />
        </form>
        <div className="button-container">
          {hasAccount ? (
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
                Have an account?{" "}
                <span onClick={(e) => onClickHandler(e)}>Log In</span>
              </p>
            </div>
          )}
        </div>

        <div className="message1">{messageMain}</div>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
