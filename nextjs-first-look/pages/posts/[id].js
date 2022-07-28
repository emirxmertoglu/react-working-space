export default function PostDetails({ post }) {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${ctx.params.id}`
  ).then((res) => res.json());
  return {
    props: {
      post,
    },
  };
};
