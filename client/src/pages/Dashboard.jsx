import React, { useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
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
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);
  return <div>Dashboard</div>;
};

export default Dashboard;
