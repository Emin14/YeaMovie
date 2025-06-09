import styles from "./NotFindMovies.module.css";

export default function NotFindMovies({ movieTitle }) {
  return (
    <div className={styles.notFindMovies}>
      <p>
        По запросу
        <span className={styles.searchText}> "{movieTitle}" </span>
        не найдено фильмов
      </p>
      <p>Попробуйте другой запрос</p>
    </div>
  );
}
