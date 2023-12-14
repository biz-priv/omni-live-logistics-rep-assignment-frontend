import { Header } from "../../components";
import "./login.css";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import { Navigate } from "react-router-dom";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure({
  Auth: {
    Cognito: {
      identityPoolId: `${process.env.REACT_APP_IDENTITY_POOL_ID}`,
      userPoolClientId: `${process.env.REACT_APP_USERPOOL_CLIENT_ID}`,
      userPoolId: `${process.env.REACT_APP_USERPOOL_ID}`,
      signUpVerificationMethod: "code",
      loginWith: {
        email: true,
      },
      region: `${process.env.REACT_APP_USERPOOL_REGION}`,
    },
  },
});

function Login() {
  return (
    <div className="login-component">
      <div>
        <Header />
      </div>
      <div className="login-component-middle">
        <div className="login-component-middle-inner">
          <Authenticator loginMechanisms={["email", "username"]}>
            {() => <Navigate to="/dashboard" />}
          </Authenticator>
        </div>
      </div>
    </div>
  );
}

export default Login;
