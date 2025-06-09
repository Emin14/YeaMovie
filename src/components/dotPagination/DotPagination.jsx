import styles from "./DotPagination.module.css";

export default function DotPagination({
  currentPage,
  totalPages,
  setActivePage,
}) {
  const maxVisible = 5;
  let startPage;
  let endPage;

  if (totalPages <= maxVisible) {
    startPage = 1;
    endPage = totalPages;
  } else {
    const maxVisibleBefore = Math.floor(maxVisible / 2);
    const maxVisibleAfter = Math.ceil(maxVisible / 2) - 1;

    if (currentPage <= maxVisibleBefore) {
      startPage = 1;
      endPage = maxVisible;
    } else if (currentPage + maxVisibleAfter >= totalPages) {
      startPage = totalPages - maxVisible + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - maxVisibleBefore;
      endPage = currentPage + maxVisibleAfter;
    }
  }

  const handleClick = (e) => {
    setActivePage(e.target.getAttribute("data-page"));
  };

  return (
    <div className={styles.pagination} onClick={handleClick}>
      {Array.from({ length: endPage - startPage + 1 }, (_, i) => {
        const page = startPage + i;
        return (
          <button
            key={page}
            data-page={page}
            className={`${styles.dot} ${currentPage === page ? styles.active : ""}`}
            aria-label={`Страница ${page}`}
            title={`Перейти на страницу ${page}`}
          >
            <span className={styles.tooltip}>Страница {page}</span>
          </button>
        );
      })}
    </div>
  );
}
