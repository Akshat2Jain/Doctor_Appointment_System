import React, { useEffect } from "react";
import axios from "axios";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { message } from "antd";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getUserData = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/user/getUserData",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogout = async () => {
    dispatch(showLoading());
    await new Promise((resolve) => setTimeout(resolve, 1000));

    localStorage.clear();
    navigate("/");
    message.success("Logout Succesfully");
    dispatch(hideLoading());
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <>
      <Button onClick={handleLogout}>Logout</Button>
    </>
  );
};

export default Dashboard;
