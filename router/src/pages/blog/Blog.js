import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { url } from "../../utils";

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");

  useEffect(() => {
    searchParams.set("search", search);
    if (!search) {
      searchParams.delete("search");
    }
    setSearchParams(Object.fromEntries([...searchParams]));
  }, [search]);

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
    <>
      <input
        defaultValue={search}
        onChange={(e) => setSearch(e.target.value)}
      />
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
    </>
  );
}
