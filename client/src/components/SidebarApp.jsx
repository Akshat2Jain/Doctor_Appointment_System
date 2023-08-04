import { Menu } from "antd";
import { userMenu, adminMenu } from "../Menu/MenuList";
import "../styles/sidebar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

const SidebarApp = () => {
  const { user } = useSelector((state) => state.user);
  const SideBarMenu = user?.isAdmin ? adminMenu : userMenu;
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
