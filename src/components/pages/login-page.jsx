import React from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const LoginPage = ({ isLoggedIn, onLogin }) => {
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div className="jumbotron">
      <p>To login click the button below.</p>
      <button className="btn btn-primary" onClick={() => onLogin(true)}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;
