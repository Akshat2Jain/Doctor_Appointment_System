import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SidebarApp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedKeys, setSelectedKeys] = useState("/dashboard");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  return (
    <>
      <div className="SideMenu">
        <Menu
          className="SideMenuVertical"
          mode="vertical"
          onClick={(item) => {
            //item.key
            navigate(item.key);
          }}
          selectedKeys={[selectedKeys]}
          items={[
            {
              label: "Dashbaord",
              icon: <AppstoreOutlined />,
              key: "/dasboard",
            },
            {
              label: "Inventory",
              key: "/dashboard/inventory",
              icon: <ShopOutlined />,
            },
            {
              label: "Orders",
              key: "/dashboard/orders",
              icon: <ShoppingCartOutlined />,
            },
            {
              label: "Profile",
              key: "/customers",
              icon: <UserOutlined />,
            },
          ]}
        ></Menu>
      </div>
    </>
  );
};

export default SidebarApp;
