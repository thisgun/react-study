import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

import Register from "./components/accounts/Register";
import Login from "./components/accounts/Login";

import Home from "./pages/home/Home";
import WithPrivateRoute from "./utils/WithPrivateRoute";

import Boards from "./components/board/Boards";

import PostDetail from "./components/board/PostDetail";

import ErrorDiv from "./components/layouts/ErrorDiv";

import "./components/layouts/layout.css";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header title="My header" subtitle="subtitle2" />
      <div id="content-wrapper">
        <div id="wrapper">
          <div id="container">
            <div className="conle">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/login" element={<Login />} />

                <Route exact path="/board/:id" element={<Boards />} />

                <Route exact path="/post/:post_id" element={<PostDetail />} />
              </Routes>
            </div>
            <div className="conri"></div>
          </div>
          <Footer note="Footer Note" />
        </div>
      </div>
      <ErrorDiv />
    </Router>
  );
};
export default App;
