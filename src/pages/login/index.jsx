import { Header } from "../../components";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";

function Login() {
  return (
    <div className="login-component">
      <div>
        <Header />
      </div>
      <div className="login-component-middle">
        <div className="login-component-middle-inner">
          <Form>
            <div className="login-component-form-header">
              <h3>Welcome back!</h3>
            </div>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email address"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div className="login-component-form-button">
              <Button
                variant="primary"
                type="submit"
                id="login-component-form-button"
              >
                Login
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
