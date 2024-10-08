import React from "react";
import ReactDOM from "react-dom/client";
import App from "./views/App";
import reportWebVitals from "./reportWebVitals";
import "./styles/global.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./views/component/Users/User";
import Admin from "./views/component/Admin/Admin";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Users" element={<User />} />
      <Route path="Admins" element={<Admin />} />
    </Routes>
  </BrowserRouter>
  /* </React.StrictMode> */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
