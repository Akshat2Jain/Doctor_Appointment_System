import React, { useState } from "react";
import "../styles/FormStyle.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import Navbar from "../components/Navbar";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic validation
    const validationErrors = {};
    if (!formData.email) {
      validationErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      validationErrors.email = "Invalid email address";
    }
    if (!formData.password) {
      validationErrors.password = "Password is required";
    }
    if (formData.password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Submit the form - you can add your logic here for handling the registration request
      try {
        dispatch(showLoading());
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const res = await axios.post(
          "http://localhost:8080/api/v1/user/login",
          formData
        );
        dispatch(hideLoading());
        if (res.data.success) {
          localStorage.setItem("token", res.data.token);
          message.success("Login Succesfully");

          navigate("/dashboard");
          window.location.reload();
        } else {
          message.error(res.data.message);
        }
        console.log(formData);
      } catch (error) {
        dispatch(hideLoading());
        console.log(error);
        message.error("Something went wrong");
      }
    }
  };
  return (
    <>
      <Navbar />
      <div className="form-container">
        <h2 className="form-title">💊 Welcome Back to Your Health Hub</h2>
        <h3 className="form-title2">Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label> ✉️ Email:</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error-msg">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label> 🔒Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error-msg">{errors.password}</p>}
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
          <p>
            Not registered?{" "}
            <span className="link" onClick={() => navigate("/register")}>
              Register here
            </span>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
