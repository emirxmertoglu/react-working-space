import { Outlet } from "react-router-dom";

export default function Blog() {
  return (
    <div>
      <h3>Blog page</h3>
      <Outlet />
    </div>
  );
}
