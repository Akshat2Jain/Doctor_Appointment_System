import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/FormStyle.css";
import { message } from "antd";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

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

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic validation
    const validationErrors = {};
    if (!formData.name) {
      validationErrors.name = "Name is required";
    }
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
      // Submit the form -  logic here for handling the registration request
      try {
        const res = await axios.post(
          "http://localhost:8080/api/v1/user/register",
          formData
        );
        if (res.data.success) {
          message.success("Register Successfully");
          navigate("/login");
        } else {
          message.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
        message.error("Something went Wrong");
      }
      console.log(formData);
    }
  };
  return (
    <div className="form-container">
      <h2 className="form-title">Join the Doctor Appointment Hub</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name"> 🧑‍⚕️ Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error-msg">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email"> ✉️ Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-msg">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">🔒 Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error-msg">{errors.password}</p>}
        </div>
        <button type="submit" className="submit-btn">
          Register
        </button>
      </form>
      <p>
        Already registered?{" "}
        <span className="link" onClick={() => navigate("/login")}>
          Login here
        </span>
      </p>
    </div>
  );
};

export default Register;
