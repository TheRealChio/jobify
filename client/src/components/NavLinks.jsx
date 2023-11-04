import { NavLink } from "react-router-dom";
import { useDashboardContext } from "../pages/DashboardLayout";
import links from "../utils/links";

export default function NavLinks({ isBigSidebar }) {
  const { toggleSidebar, user } = useDashboardContext();
  return (
    <div className="nav-links">
      {links.map((link) => (
        <NavLink
          to={link.path}
          key={link.text}
          className="nav-link"
          onClick={!isBigSidebar && toggleSidebar}
          end
        >
          <span className="icon">{link.icon}</span>
          {link.text}
        </NavLink>
      ))}
    </div>
  );
}
