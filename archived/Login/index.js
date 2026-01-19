import React from "react";

export default function Login() {
  return (
    <div className="loginContainer">
      <form method="post" className="loginForm">
        <input
          type="text"
          placeholder="Username"
          required="required"
          className="loginInput"
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          required="required"
          className="loginInput"
        />
        <br />
        <button type="submit" className="loginBtn">
          Let me in.
        </button>
      </form>
    </div>
  );
}
