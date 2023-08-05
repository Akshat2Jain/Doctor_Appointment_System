import React, { useState } from "react";
import { BellFilled } from "@ant-design/icons";
import { Badge, Drawer, Image, List, Space, Typography } from "antd";
import "../styles/Dashboard.css";
import { Button } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HeaderApp = ({ handleLogout, name }) => {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  return (
    <>
      <div className="AppHeader">
        <Image
          width={50}
          src="https://static.vecteezy.com/system/resources/previews/002/896/807/original/female-doctor-using-her-digital-tablet-free-vector.jpg"
        ></Image>
        <Typography.Title>{name} Dashboard</Typography.Title>
        <Space>
          <Badge>
            <Button onClick={handleLogout}>Logout</Button>
          </Badge>
          <Badge
            count={user && user.notification.length}
            onClick={() => {
              navigate("/notifications");
            }}
            className="bell"
          >
            <BellFilled style={{ fontSize: 24 }} />
          </Badge>
        </Space>
        <Drawer
          title="Notifications"
          open={notificationsOpen}
          onClose={() => {
            setNotificationsOpen(false);
          }}
          maskClosable
        >
          <List
            renderItem={(item) => {
              return (
                <List.Item>
                  <Typography.Text strong>{item.title}</Typography.Text> has
                  been ordered!
                </List.Item>
              );
            }}
          ></List>
        </Drawer>
      </div>
    </>
  );
};

export default HeaderApp;
