import Button from "../../components/Button/Button";
import { Link, useLocation, useParams } from "react-router";
import MovieFrames from "../../components/MovieFrames/MovieFrames";
import SimilarMovies from "../../components/SimilarMovies/SimilarMovies";
import { useFetchMoviesById } from "./useFetchMoviesById";
import Spinner from "../../components/Spinner/Spinner";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import notPoster from "../../../public/notPoster.svg";
import MovieMetadataTable from "../../components/MovieMetadataTable/MovieMetadataTable";
import styles from "./MovieDetails.module.css";

export default function MovieDetails() {
  const { id } = useParams();
  const { state } = useLocation();
  const { movie, loading } = useFetchMoviesById(id, state);

  const poster = movie?.poster.previewUrl || notPoster;

  let metadata = [];
  if (movie) {
    metadata = [
      { data: movie.genres, ru: "Жанр" },
      { data: movie.countries, ru: "Страна" },
      { data: movie.year, ru: "Год" },
      {
        data: movie.persons.find((item) => item.enProfession === "director")
          ?.name,
        ru: "Режисер",
      },
      {
        data: movie.persons.filter(
          (item, index) => item.enProfession === "actor" && index < 5,
        ),
        ru: "В главных ролях",
      },
    ];
  }

  if (loading) {
    return <Spinner />;
  }

  if (!movie) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <Breadcrumbs
        paths={[
          { name: "Главная", path: "/" },
          { name: "Назад", path: -1 },
        ]}
        className={styles.breadcrumbs}
      />
      <div className={styles.movieCard}>
        <div className={styles.leftBlock}>
          <img src={poster} className={styles.banner} alt="" />
          <p className={styles.watchTitle}>Смотреть на:</p>
          <div className={styles.watchabilityLogos}>
            {movie.watchability.items.map((item) => (
              <Link key={item.name} to={item.url} target="_blank">
                <img className={styles.watchabilityLogo} src={item.logo.url} />
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.rightBlock}>
          <div className={styles.header}>
            <h1 className={styles.title}>{movie.name}</h1>
            <Button className={styles.btn}>В избранное</Button>
            <div className={styles.ratings}>
              <p>
                <span>Кинопоиск </span>
                <span className={styles.ratingCount}>
                  {movie.rating.kp.toFixed(1)}/10
                </span>
              </p>
              <p>
                <span>HMI </span>
                <span className={styles.ratingCount}>
                  {movie.rating.imdb.toFixed(1)}/10
                </span>
              </p>
            </div>
          </div>
          <p className={styles.description}>{movie.description}</p>
          <p className={styles.tableTitle}>О фильме</p>
          <MovieMetadataTable metadata={metadata} />
        </div>
      </div>
      <MovieFrames id={movie.id} className={styles.movieFrames} />
      <SimilarMovies id={id} />
    </div>
  );
}
