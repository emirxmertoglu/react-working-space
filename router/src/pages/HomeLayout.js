import { Outlet, NavLink } from "react-router-dom";
import { url } from "../utils";
import classNames from "classnames";

export default function HomeLayout() {
  const myClass = ({ isActive }) =>
    classNames({
      "px-1.5 mr-1.5 last:mr-0": true,
      "bg-yellow-300 rounded": isActive,
    });

  return (
    <>
      <nav className="mt-2 ml-2">
        <NavLink to={url("home")} className={myClass}>
          Home
        </NavLink>
        <NavLink to={url("home.contact")} className={myClass}>
          Contact
        </NavLink>
        <NavLink to={url("home.blog")} className={myClass}>
          Blog
        </NavLink>
        <NavLink to={url("home.profile")} className={myClass}>
          Profile
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
