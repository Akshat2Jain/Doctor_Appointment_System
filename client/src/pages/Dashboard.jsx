import React, { useEffect } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { message } from "antd";
import SidebarApp from "../components/SidebarApp";
import HeaderApp from "../components/HeaderApp";
import PageContent from "../components/PageContent";
import "../styles/Dashboard.css";

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
      console.log(res.data.data.name);
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
      <div className="DashApp">
        <HeaderApp handleLogout={handleLogout} />
        <div className="SideMenuAndPageContent">
          <SidebarApp />
          <PageContent />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
