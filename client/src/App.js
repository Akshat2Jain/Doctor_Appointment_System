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
import PublicRoute from "./components/PublicRoute";
import ProtectedRoutes from "./components/ProtectedRoutes";

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
            <Routes>
              <Route>
                <Route path="/" element={<HomePage />} />
                <Route
                  path="Login"
                  element={
                    <PublicRoute>
                      <Login />
                    </PublicRoute>
                  }
                />
                <Route
                  path="Register"
                  element={
                    <PublicRoute>
                      <Register />
                    </PublicRoute>
                  }
                />
                <Route
                  path="Dashboard"
                  element={
                    <ProtectedRoutes>
                      <Dashboard />
                    </ProtectedRoutes>
                  }
                />
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
