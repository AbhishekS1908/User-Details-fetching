import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import InfoPage from "./components/InfoPage";
import Congratulations from "./components/Congratulations";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Info-page" element={<InfoPage />} />
          <Route exact path="/Congratulations" element={<Congratulations />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
