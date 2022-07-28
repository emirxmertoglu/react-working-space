export default function PostDetails({ post }) {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

export const getStaticPaths = async () => {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json()
  );
  const paths = posts.map((post) => {
    return {
      params: {
        id: post.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${ctx.params.id}`
  ).then((res) => res.json());

  return {
    props: {
      post,
    },
  };
};
