import Post from "./Post";

export default function PostList({ posts }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}
