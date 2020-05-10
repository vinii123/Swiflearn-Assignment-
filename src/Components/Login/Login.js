import React from "react";
import "./Login.css";

const Login = () => (
    <div className="login-page">
  <form className="box">
    <h2 className="form-head">Member Login</h2>
    <div className="form-body">
      <input placeholder="Enter the username" type="text" />
      <input placeholder="Password" text="password" />
    </div>
    <button className="form-footer" type="submit">
      Sign In
    </button>
  </form>
  </div>
);

export default Login;
