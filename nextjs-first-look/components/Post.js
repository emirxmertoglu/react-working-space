import Link from "next/link";

export default function Post({ post }) {
  return (
    <Link href={`/posts/${post.id}`}>
      <a
        style={{
          padding: 10,
          border: "1px solid #ccc",
          borderRadius: 4,
        }}
      >
        {post.title}
      </a>
    </Link>
  );
}
