import styles from "./Ratings.module.css";

export default function Ratings({ rating }) {
  return (
    <div className={styles.ratings}>
      <p>
        <span>Кинопоиск </span>
        <span className={styles.ratingCount}>{rating.kp.toFixed(1)}/10</span>
      </p>
      <p>
        <span>HMI </span>
        <span className={styles.ratingCount}>{rating.imdb.toFixed(1)}/10</span>
      </p>
    </div>
  );
}
