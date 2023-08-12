import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Row } from "antd";
import DoctorList from "./DoctorList";
import "../styles/DoctorCard.css";

const PageContent = () => {
  const [doctors, setDoctors] = useState([]);
  const getAllDoctors = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8080/api/v1/user/getallDoctors",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllDoctors();
  }, []);
  return (
    <>
      <h1 className="text-center">Doctor List</h1>
      <div className="doctorCard">
        <Row>
          {doctors && doctors.map((doctor) => <DoctorList doctor={doctor} />)}
        </Row>
      </div>
    </>
  );
};

export default PageContent;
