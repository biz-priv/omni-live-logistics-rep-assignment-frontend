import mainLogo from "../../assets/icons/logo.svg";
import React, { useState } from "react";
import "./header.css";
import Button from "react-bootstrap/Button";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
import Loader from "../loader";

function Header() {
  const [loader, setLoader] = useState(false);
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  const navigate = useNavigate();

  const handleSignOut = () => {
    setLoader(true);
    signOut();
    navigate("/");
  };

  return (
    <div className="component-header">
      <div className="component-header-left">
        <a class="navbar-brand" href="#">
          <img src={mainLogo} alt="Logo" height="46" />
        </a>
      </div>
      <div className="component-header-right">
        <h3>Brokerage Parade Carrier Rep Assignment</h3>
      </div>
      <span className="component-header-menu">
        {user && (
          <Button id="sign-out-button" onClick={handleSignOut}>
            Sign Out
          </Button>
        )}
      </span>
      <Loader show={loader} />
    </div>
  );
}

export default Header;
