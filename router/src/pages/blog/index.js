import { Outlet } from "react-router-dom";

export default function Blog() {
  return (
    <div>
      <h2 className="text-3xl text-center font-medium">Blog page</h2>
      <Outlet />
    </div>
  );
}
