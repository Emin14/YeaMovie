import { Link } from "react-router";
import styles from "./MovieCard.module.css";

export default function MovieCard({ id, title, img, release, rating }) {
  return (
    <Link to={`/film/${id}`} className={styles.movieCard}>
      <div className={styles.imgWrapper}>
        <img src={img} alt="" />
      </div>
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.footer}>
        <span className={styles.release}>{release}г.</span>
        <span className={styles.rating}>{rating.toFixed(1)}/10</span>
      </div>
    </Link>
  );
}
