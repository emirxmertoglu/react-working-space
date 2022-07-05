import { Outlet, NavLink } from "react-router-dom";

export default function HomeLayout() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </nav>
      <Outlet />
    </>
  );
}
