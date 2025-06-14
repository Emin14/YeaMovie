import { useState } from "react";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import { useNavigate } from "react-router";
import Logo from "../Logo/Logo";
import styles from "./Header.module.css";

export default function Header() {
  const [movieTitleQuery, setMovieTitleQuery] = useState("");
  const navigate = useNavigate();

  const search = () => {
    const trimmedMovieTitle = movieTitleQuery.trim();
    if (trimmedMovieTitle) {
      navigate(`/search?q=${encodeURIComponent(trimmedMovieTitle)}`);
      setMovieTitleQuery("");
    }
  };

  return (
    <header className={styles.header}>
      <ContentWrapper>
        <Logo />
        <label className={styles.label}>
          <input
            className={styles.input}
            type="text"
            placeholder="Поиск..."
            value={movieTitleQuery}
            onChange={(e) => setMovieTitleQuery(e.target.value)}
          />
          <div className={styles.iconWrapper} onClick={search}>
            <svg
              className={styles.searchIcon}
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.375 7.74999C13.375 8.48868 13.2295 9.22013 12.9468 9.90259C12.6641 10.585 12.2498 11.2051 11.7275 11.7275C11.2051 12.2498 10.585 12.6641 9.90259 12.9468C9.22013 13.2295 8.48868 13.375 7.74999 13.375C7.01131 13.375 6.27986 13.2295 5.5974 12.9468C4.91494 12.6641 4.29485 12.2498 3.77252 11.7275C3.25019 11.2051 2.83585 10.585 2.55317 9.90259C2.27049 9.22013 2.12499 8.48868 2.12499 7.74999C2.12499 6.25815 2.71763 4.82741 3.77252 3.77252C4.82741 2.71763 6.25815 2.12499 7.74999 2.12499C9.24184 2.12499 10.6726 2.71763 11.7275 3.77252C12.7824 4.82741 13.375 6.25815 13.375 7.74999ZM12.35 13.675C10.843 14.845 8.9467 15.3966 7.04724 15.2177C5.14778 15.0387 3.38792 14.1426 2.12593 12.7117C0.863937 11.2809 0.194682 9.42287 0.254412 7.51593C0.314143 5.609 1.09837 3.7965 2.44744 2.44744C3.7965 1.09837 5.609 0.314143 7.51593 0.254412C9.42287 0.194682 11.2809 0.863937 12.7117 2.12593C14.1426 3.38792 15.0387 5.14778 15.2177 7.04724C15.3966 8.9467 14.845 10.843 13.675 12.35L17.1625 15.8375C17.2546 15.9233 17.3285 16.0268 17.3797 16.1418C17.431 16.2568 17.4585 16.381 17.4607 16.5068C17.463 16.6327 17.4398 16.7578 17.3926 16.8745C17.3455 16.9912 17.2753 17.0973 17.1863 17.1863C17.0973 17.2753 16.9912 17.3455 16.8745 17.3926C16.7578 17.4398 16.6327 17.463 16.5068 17.4607C16.381 17.4585 16.2568 17.431 16.1418 17.3797C16.0268 17.3285 15.9233 17.2546 15.8375 17.1625L12.35 13.675Z"
                fill="#151515"
                fillOpacity="0.28"
              />
            </svg>
          </div>
        </label>
      </ContentWrapper>
    </header>
  );
}
