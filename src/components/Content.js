import React, { useState } from "react";
import "./Content.css";
import Footer from "./Footer";
import Header from "./Header";
import { useSelector } from "react-redux";

const Content = (props) => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const { onSubmit, messageMain, handleLogOut } = props;
  const email = useSelector((state) => state.email);
  const passwordFromState = useSelector((state) => state.password);

  const onFormSubmit = (e) => {
    setMessage("");
    e.preventDefault();
    onSubmit(id, name);
    setMessage(messageMain);
    if (name !== "" && id !== "" && password !== "" && confirmPassword !== "") {
      if (password === passwordFromState) {
        if (password === confirmPassword) {
          onSubmit({ name, id });
          setMessage("Request Successful");
        } else {
          setMessage("Please check the Password Again");
        }
      } else {
        setMessage("Incorrect Password");
      }
    } else {
      setMessage("Please fill all the Fields");
    }
  };
  return (
    <div className="content-body">
      <Header email={email} handleLogOut={handleLogOut} />
      <div className="content-container">
        <div className="form-box">
          <div className="heading">Sign up</div>
          <form className="form" onSubmit={(e) => onFormSubmit(e)}>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label>Id:</label>
            <input
              type="number"
              value={id}
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
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
            <input type="submit" className="submit" />
          </form>

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
