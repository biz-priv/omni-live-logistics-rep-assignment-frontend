import mainLogo from "../../assets/icons/logo.svg";
import "./header.css";
import Button from "react-bootstrap/Button";

function Header() {

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
      <Button id="sign-out-button">Sign Out</Button>
      </span>
    </div>
  );
}

export default Header;
