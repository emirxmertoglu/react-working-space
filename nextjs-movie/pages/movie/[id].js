import Head from "next/head";
import styles from "../../styles/MovieDetail.module.scss";

export default function MovieDetail({ movie }) {
  return (
    <div className={styles.movie}>
      <Head>
        <title>{movie.title}</title>
      </Head>

      <div
        className={styles.cover}
        style={{
          backgroundImage: `url('https://www.themoviedb.org/t/p/original${movie.backdrop_path}')`,
        }}
      ></div>
      <h3>{movie.title}</h3>
      <div className={styles.summary}>{movie.overview}</div>
    </div>
  );
}

export const getServerSideProps = async ({ params }) => {
  const movie = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=4364b771abbf71498e946dd82ab39c67&language=en-US`
  ).then((res) => res.json());

  return {
    props: {
      movie,
    },
  };
};
