import Link from "next/link";
import styles from "../styles/PopularMovies.module.scss";

export default function PopularMovies({ movies }) {
  return (
    <>
      <h2 className={styles.head}>Popular Movies</h2>
      <div className={styles.movie_list}>
        {movies.map((movie) => (
          <Link key={movie.id} href={`/movie/${movie.id}`}>
            <a>
              <h3>{movie.title}</h3>
              <img
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                alt={movie.title}
              />
            </a>
          </Link>
        ))}
      </div>
    </>
  );
}
