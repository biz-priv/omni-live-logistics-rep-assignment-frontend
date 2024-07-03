/* 
* File: src\index.js
* Project: Omni-Live-logistics-rep-assignment
* Author: Bizcloud Experts
* Date: 2024-01-12
* Confidential and Proprietary
*/
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Authenticator.Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Authenticator.Provider>
);
