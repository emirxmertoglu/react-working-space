import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { url } from "../../utils";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <meta name="author" content="Emir Mertoglu" />
        <title>Blog</title>
      </Helmet>
      <input
        defaultValue={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-2 last:mb-0">
            <Link
              to={url("home.blog.post", {
                id: post.id,
                url: post.url,
              })}
              className="text-lg font-medium underline underline-offset-4 shadow-lg"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
