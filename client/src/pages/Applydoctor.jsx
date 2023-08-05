import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { message } from "antd";
import SidebarApp from "../components/SidebarApp";
import HeaderApp from "../components/HeaderApp";
import { Col, Form, Input, Row, TimePicker } from "antd";
import "../styles/Form.css";
const Applydoctor = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  // getuserdata
  const handleLogout = async () => {
    dispatch(showLoading());
    await new Promise((resolve) => setTimeout(resolve, 1000));
    localStorage.clear();
    navigate("/");
    message.success("Logout Succesfully");
    dispatch(hideLoading());
  };

  // apply doctor form
  const handleSubmit = async (values, e) => {
    console.log(values);
    try {
      dispatch(showLoading());

      const res = await axios.post(
        "http://localhost:8080/api/v1/user/applydoctor",
        { ...values, userId: user._id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.message);
        navigate("/dashboard");
      } else {
        message.error(res.data.success);
      }
    } catch (error) {
      message.error("Something went wrong");
      dispatch(hideLoading());
      console.log(error);
    }
  };
  return (
    <>
      <div className="DashApp">
        <HeaderApp handleLogout={handleLogout} name={user?.name} />
        <div className="SideMenuAndPageContent">
          <SidebarApp />
          <div className="form">
            <Form layout="vertical" onFinish={handleSubmit} className="m-3">
              <h4 className="">Personal Details : </h4>
              <Row gutter={20}>
                <Col xs={24} md={24} lg={8}>
                  <Form.Item
                    label="First Name"
                    name="firstName"
                    required
                    rules={[{ required: true }]}
                  >
                    <Input type="text" placeholder="your first name" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={24} lg={8}>
                  <Form.Item
                    label="Last Name"
                    name="lastName"
                    required
                    rules={[{ required: true }]}
                  >
                    <Input type="text" placeholder="your last name" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={24} lg={8}>
                  <Form.Item
                    label="Phone No"
                    name="phone"
                    required
                    rules={[{ required: true }]}
                  >
                    <Input type="text" placeholder="your contact no" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={24} lg={8}>
                  <Form.Item
                    label="Email"
                    name="email"
                    required
                    rules={[{ required: true }]}
                  >
                    <Input type="email" placeholder="your email address" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={24} lg={8}>
                  <Form.Item label="Website" name="website">
                    <Input type="text" placeholder="your website" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={24} lg={8}>
                  <Form.Item
                    label="Address"
                    name="address"
                    required
                    rules={[{ required: true }]}
                  >
                    <Input type="text" placeholder="your clinic address" />
                  </Form.Item>
                </Col>
              </Row>
              <h4>Professional Details :</h4>
              <Row gutter={20}>
                <Col xs={24} md={24} lg={8}>
                  <Form.Item
                    label="Specialization"
                    name="specialization"
                    required
                    rules={[{ required: true }]}
                  >
                    <Input type="text" placeholder="your specialization" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={24} lg={8}>
                  <Form.Item
                    label="Experience"
                    name="experience"
                    required
                    rules={[{ required: true }]}
                  >
                    <Input type="text" placeholder="your experience" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={24} lg={8}>
                  <Form.Item
                    label="Fees Per Cunsaltation"
                    name="feesPerCunsaltation"
                    required
                    rules={[{ required: true }]}
                  >
                    <Input type="text" placeholder="your contact no" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={24} lg={8}>
                  <Form.Item label="Timings" name="timings" required>
                    <TimePicker.RangePicker format="HH:mm" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={24} lg={8}></Col>
                <Col xs={24} md={24} lg={8}>
                  <button className="btn btn-primary form-btn" type="submit">
                    Submit
                  </button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Applydoctor;
