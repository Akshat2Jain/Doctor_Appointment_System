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
import Applydoctor from "./pages/Applydoctor";
import Profile from "./pages/Profile";
import Notification from "./pages/Notification";
import Doctors from "./pages/Admin/Doctors";
import Users from "./pages/Admin/Users";
import Appointment from "./pages/Appointment";

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
                <Route
                  path="/"
                  element={
                    <PublicRoute>
                      <HomePage />
                    </PublicRoute>
                  }
                />
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
              <Route
                path="/applydoctor"
                element={
                  <ProtectedRoutes>
                    <Applydoctor />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/doctor/profile/:id"
                element={
                  <ProtectedRoutes>
                    <Profile />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/notifications"
                element={
                  <ProtectedRoutes>
                    <Notification />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/admin/doctors"
                element={
                  <ProtectedRoutes>
                    <Doctors />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/admin/users"
                element={
                  <ProtectedRoutes>
                    <Users />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="book-appointment/:id"
                element={
                  <ProtectedRoutes>
                    <Appointment />
                  </ProtectedRoutes>
                }
              />
            </Routes>
          </div>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
