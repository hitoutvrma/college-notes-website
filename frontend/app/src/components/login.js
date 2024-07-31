import './css/header.css';
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (<div>
        {isAuthenticated ?(<button onClick={(e) => logout()} id="login">logout</button>):
      <button id="login" onClick={() => loginWithRedirect()}>login</button>}
    </div>
      );
};

export default LoginButton;