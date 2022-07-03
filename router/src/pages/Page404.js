import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <div>
      <h1>Page Not Found</h1>
      <Link to="/">Go back to home</Link>
    </div>
  );
}
