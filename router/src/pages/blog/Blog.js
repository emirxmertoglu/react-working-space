import { Link } from "react-router-dom";
import { url } from "../../utils";

export default function Blog() {
  const posts = [
    {
      id: 1,
      url: "post-1",
      title: "Post 1",
    },
    {
      id: 2,
      url: "post-2",
      title: "Post 2",
    },
    {
      id: 3,
      url: "post-3",
      title: "Post 3",
    },
  ];

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link
            to={url("home.blog.post", {
              id: post.id,
              url: post.url,
            })}
          >
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
