import { Routes, Route, Navigate } from "react-router-dom";
import { Login, Dashboard } from "./pages";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuthenticator } from "@aws-amplify/ui-react";

function App() {
  const { user } = useAuthenticator((context) => [context.user]);
  return (
    <Routes>
      <Route
        path="/login"
        element={!user ? <Login /> : <Navigate to="/dashboard" />}
      />
      <Route path="/" element={!user ? <Login /> : <Dashboard />}></Route>
      <Route
        path="/dashboard"
        element={user ? <Dashboard /> : <Navigate to="/login" />}
      ></Route>
    </Routes>
  );
}

export default App;
