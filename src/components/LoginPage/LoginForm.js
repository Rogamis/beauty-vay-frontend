import * as React from "react";
import { useNavigate } from "react-router";
import "../../style/style.css"

function LoginForm() {

  const navigateToHomePage = useNavigate();
  const navigateHome = () => {
    navigateToHomePage("/");
  };

  const login = useNavigate();
  const LogIn = () => {
    login("/login");
  };

  return (
    <div class="box">
      <form>
        <span></span>
        <div class="input-container">
          <input id="email"/>
          <label>Login</label>
        </div>
        <div class="input-container">
          <input id="password" type="password"/>
          <label>Password</label>
        </div>
        <button type="button" className="btn" onClick={navigateHome}>
          Home
        </button>
        <button type="button" className="btn">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;