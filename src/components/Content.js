import React, { useState } from "react";
import "./Content.css";
import Footer from "./Footer";
import Header from "./Header";
import { useSelector } from "react-redux";

const Content = (props) => {
  // States
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  // Destructuring props
  const { onSubmit, messageMain, handleLogOut } = props;

  // Displaying email from Redux
  const email = useSelector((state) => state.email);

  // Fetching password from Redux
  const passwordFromState = useSelector((state) => state.password);

  // Handle form submission
  const onFormSubmit = (e) => {
    setMessage("");
    e.preventDefault();
    onSubmit(id, name);
    setMessage(messageMain);

    // Input fields Check
    if (name !== "" && id !== "" && password !== "" && confirmPassword !== "") {
      // Password check
      if (password === passwordFromState) {
        if (password === confirmPassword) {
          onSubmit({ name, id });
          setMessage("Request Successful");
        } else {
          setMessage("Please check the Password Again");
        }
      }
      // Password check failed
      else {
        setMessage("Incorrect Password");
      }
    }
    // Input field check failed
    else {
      setMessage("Please fill all the Fields");
    }
  };
  // Return to DOM
  return (
    <div className="content-body">
      {/* Header */}
      <Header email={email} handleLogOut={handleLogOut} />

      <div className="content-container">
        <div className="form-box">
          <div className="heading">Sign up</div>
          <form className="form" onSubmit={(e) => onFormSubmit(e)}>
            <label>Name:</label>

            {/* Setting name to state */}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label>Id:</label>

            {/* Setting id to state */}
            <input
              type="number"
              value={id}
              onChange={(e) => {
                setId(e.target.value);
              }}
            />

            {/* Setting password to state */}
            <div className="password-box">
              <div className="password1">
                <label>Password:</label>
                <input
                  type="password"
                  className="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className="password2">
                <label>Confirm Password:</label>
                <input
                  type="password"
                  className="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>

            {/* Submit */}
            <input type="submit" className="submit" />
          </form>

          {/* Response Message */}
          <div className="message">
            <p>{message !== "" ? message : messageMain}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Content;
