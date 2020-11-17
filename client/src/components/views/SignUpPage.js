import React from "react";
import { Link } from "react-router-dom";
import image from "../images/kelly-mccrimmon-YskopWE0zEk-unsplash.jpg";
import github from "../images/github.png";

import "./SignUpPage.css";

function SignUpPage(props) {
  return (
    <main className="signup-component">
      <div className="signup-component--left">
        <img
          src={image}
          className="signup-compoenent__image"
          alt="signup-image"
        />
        <div className="signup-image-source">Uploaded by Kelly McCrimmon</div>
      </div>
      <div className="signup-component--right">
        <div className="signup-title">
          <h1>Join Unsflash</h1>
        </div>
        <form className="signup-form">
          <div className="github-login-container">
            <img src={github} className="github-logo" />
            <a
              className="github-login__link"
              href="https://github.com/login/oauth/authorize?client_id=563a458ca1cae906a7d5"
            >
              Login with Github
            </a>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <label className="signup-form__label">
              first name
              <input type="text" />
            </label>
            <label className="signup-form__label">
              last name
              <input type="text" />
            </label>
          </div>
          <label className="signup-form__label">
            username(only letters, numbers, and underscores)
            <input type="text" />
          </label>
          <label className="signup-form__label">
            email
            <input type="email" style={{ width: "300px" }} />
          </label>
          <label className="signup-form__label">
            password(min. 6 char)
            <input type="password" />
          </label>
          <div className="button-container">
            <button className="button--submit">Submit</button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default SignUpPage;
