import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Loading from "./components/Loading";
import "./App.css";
import { useSelector } from "react-redux";

const App = () => {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <>
      {loading ? (
        <>
          <BrowserRouter>
            <Navbar />
            <Loading />
          </BrowserRouter>
        </>
      ) : (
        <BrowserRouter>
          <div className="app-container">
            <Navbar />
            <Routes>
              <Route>
                <Route path="/" element={<HomePage />} />
                <Route path="Login" element={<Login />} />
                <Route path="Register" element={<Register />} />
                <Route path="Dashboard" element={<Dashboard />} />
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
