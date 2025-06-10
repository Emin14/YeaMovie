import Button from "../../components/Button/Button";
import { useLocation, useParams } from "react-router";
import MovieFrames from "../../components/MovieFrames/MovieFrames";
import SimilarMovies from "../../components/SimilarMovies/SimilarMovies";
import Spinner from "../../components/Spinner/Spinner";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import notPoster from "../../../public/notPoster.svg";
import MovieMetadataTable from "../../components/MovieMetadataTable/MovieMetadataTable";
import Ratings from "../../components/Ratings/Ratings";
import WatchPlatforms from "../../components/WatchPlatforms/WatchPlatforms";
import { getMovieMetadata } from "../../utils/getMovieMetadata";
import { useFetch } from "../../hooks/useFetch";
import styles from "./MovieDetails.module.css";

export default function MovieDetails() {
  const { id } = useParams();
  const { state } = useLocation();
  const { data: movie = {}, loading } = useFetch(
    `https://api.kinopoisk.dev/v1.4/movie/${id}`,
    id,
    state,
  );
  const poster = movie?.poster?.previewUrl || notPoster;
  const metadata = getMovieMetadata(movie);

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
          <WatchPlatforms platforms={movie.watchability.items} />
        </div>
        <div className={styles.rightBlock}>
          <div className={styles.header}>
            <h1 className={styles.title}>{movie.name}</h1>
            <Button className={styles.btn}>В избранное</Button>
            <Ratings rating={movie.rating} />
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
