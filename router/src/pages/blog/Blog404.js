import { Link } from "react-router-dom";

export default function Blog404() {
  return (
    <div>
      <h1>Blog Post Not Found</h1>
      <Link to="/blog">Go back to blog</Link>
    </div>
  );
}
