import Head from "next/head";
import PostList from "../components/PostList";
import styles from "../styles/Home.module.css";

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next - GetServerSideProps</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>All Posts</h1>
      <PostList posts={posts} />
    </div>
  );
}

export const getStaticProps = async () => {
  const posts = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  ).then((res) => res.json());

  return {
    props: {
      posts,
    },
  };
};
