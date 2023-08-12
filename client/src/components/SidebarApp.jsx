import { Menu } from "antd";
import { userMenu, adminMenu } from "../Menu/MenuList";
import "../styles/sidebar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

const SidebarApp = () => {
  const { user } = useSelector((state) => state.user);
  // =========== doctor menu ===============
  const doctorMenu = [
    {
      name: "Home",
      path: "/dashboard",
      icon: "fa-solid fa-house",
    },
    {
      name: "Appointments",
      path: "/appointments",
      icon: "fa-solid fa-list",
    },

    {
      name: "Profile",
      path: `/doctor/profile/${user?._id}`,
      icon: "fa-solid fa-user",
    },
  ];
  const SideBarMenu = user?.isAdmin
    ? adminMenu
    : user?.isDoctor
    ? doctorMenu
    : userMenu;
  return (
    <>
      <div className="SideMenu">
        <Menu className="SideMenuVertical">
          <div className="menu">
            {SideBarMenu.map((item) => {
              return (
                <h2 className="menu-item">
                  <Link to={item.path}>{item.name}</Link>
                </h2>
              );
            })}
          </div>
        </Menu>
      </div>
    </>
  );
};

export default SidebarApp;
