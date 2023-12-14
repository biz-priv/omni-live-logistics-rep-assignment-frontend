import { Header } from "../../components";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import auth from '../amplifyconfiguration.json'

import '@aws-amplify/ui-react/styles.css';
Amplify.configure({
    Auth: {
        Cognito: {
            identityPoolId: "us-east-1:99dcdc3f-fdd8-4338-91f0-9cfc269cf3ee",
            userPoolClientId: "4baj7sgouh0r13pa0ohitvv2c",
            userPoolId: "us-east-1_nH3rxLIdf",
            signUpVerificationMethod: "code",
            loginWith: {
                email: true,
            },
            region: "us-east-1",
        },
    },
});

// function Login() {
//   return (
//     <div className="login-component">
//       <div>
//         <Header />
//       </div>
//       <div className="login-component-middle">
//         <div className="login-component-middle-inner">
//           <Form>
//             <div className="login-component-form-header">
//               <h3>Welcome back!</h3>
//             </div>

//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter your email address"
//               />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicPassword">
//               <Form.Label>Password</Form.Label>
//               <Form.Control type="password" placeholder="Password" />
//             </Form.Group>
//             <div className="login-component-form-button">
//               <Button
//                 variant="primary"
//                 type="submit"
//                 id="login-component-form-button"
//               >
//                 Login
//               </Button>
//             </div>
//           </Form>
//         </div>
//       </div>
//     </div>
//   );
// }

function Login() {
    return (
        <Authenticator loginMechanisms={['username','email']}>
            {({ signOut, user }) => (
                <main>
                    <h1>Hello {user.username}</h1>
                    <button onClick={signOut}>Sign out</button>
                </main>
            )}
        </Authenticator>
    );
}

export default Login;
