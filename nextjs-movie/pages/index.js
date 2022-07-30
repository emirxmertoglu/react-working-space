import Head from "next/head";
import PopularMovies from "../components/PopularMovies";

export default function Home({ movies }) {
  return (
    <div>
      <Head>
        <title>Popular Movies</title>
        <meta name="description" content="Popular Movies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PopularMovies movies={movies.results} />
    </div>
  );
}

export const getStaticProps = async () => {
  const movies = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=4364b771abbf71498e946dd82ab39c67&language=en-US&page=1"
  ).then((res) => res.json());

  return {
    props: {
      movies,
    },
  };
};
