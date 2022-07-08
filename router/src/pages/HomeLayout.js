import { Outlet, NavLink } from "react-router-dom";
import { url } from "../utils";

export default function HomeLayout() {
  return (
    <>
      <nav>
        <NavLink to={url("home")}>Home</NavLink>
        <NavLink to={url("home.contact")}>Contact</NavLink>
        <NavLink to={url("home.blog")}>Blog</NavLink>
        <NavLink to={url("home.profile")}>Profile</NavLink>
      </nav>
      <Outlet />
    </>
  );
}
