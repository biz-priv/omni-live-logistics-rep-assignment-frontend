import { Header, Loader } from "../../components";
import { useEffect, useState } from "react";
import "./login.css";
import { Amplify } from "aws-amplify";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
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
        username: true,
      },
      region: `${process.env.REACT_APP_USERPOOL_REGION}`,
    },
  },
});

function Login() {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (authStatus === "authenticated") {
      setLoader(true);
    } else {
      setLoader(false);
    }
  }, [authStatus]);
  return (
    <div className="login-component">
      <div>
        <Header />
      </div>
      <div className="login-component-middle">
        <div className="login-component-middle-inner">
          <Authenticator loginMechanisms={["email"]} hideSignUp >
            {() => <Navigate to="/dashboard" />}
          </Authenticator>
        </div>
      </div>
      <Loader show={loader} />
    </div>
  );
}

export default Login;
