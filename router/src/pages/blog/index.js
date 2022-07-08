import { Outlet } from "react-router-dom";

export default function Blog() {
  return (
    <div>
      <h2>Blog page</h2>
      <Outlet />
    </div>
  );
}
