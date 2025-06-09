import { useState } from "react";
import styles from "./ImageSlider.module.css";

export default function ImageSlider({ images, setIsModalOpen }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft") goToPrev();
    if (e.key === "ArrowRight") goToNext();
  };

  const closeModal = (e) => {
    const ada =
      e.target.parentElement.className.includes("mainImageContainer") ||
      e.target.parentElement.className.includes("imageWrapper") ||
      e.target.parentElement.className.includes("previewThumbnail") ||
      e.target.parentElement.className.includes("previewContainer");
    if (ada) {
      return;
    }
    setIsModalOpen(false);
  };

  return (
    <div className={styles.gallery} onClick={closeModal}>
      <div
        className={styles.modalOverlay}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        <div className={styles.modalContent}>
          <button
            className={styles.closeButton}
            onClick={closeModal}
            aria-label="Закрыть галерею"
          >
            &times;
          </button>

          <div className={styles.mainImageContainer}>
            <button
              className={styles.navButton}
              onClick={goToPrev}
              aria-label="Предыдущее изображение"
            >
              &#10094;
            </button>

            <div className={styles.imageWrapper}>
              <img
                src={images[currentIndex].url}
                alt={`Кадр из фильма ${currentIndex + 1}`}
                className={styles.mainImage}
                style={{
                  maxHeight: "80vh",
                  maxWidth: "100%",
                  aspectRatio: `${images[currentIndex].width}/${images[currentIndex].height}`,
                }}
              />
            </div>

            <button
              className={styles.navButton}
              onClick={goToNext}
              aria-label="Следующее изображение"
            >
              &#10095;
            </button>
          </div>

          {/* Превью изображений */}
          <div className={styles.previewContainer}>
            {images.map((img, index) => (
              <div
                key={img.id}
                className={`${styles.previewThumbnail} ${index === currentIndex ? styles.active : ""}`}
                onClick={() => goToImage(index)}
              >
                <img
                  src={img.previewUrl}
                  alt={`Превью ${index + 1}`}
                  className={styles.previewImage}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div className={styles.counter}>
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </div>
    </div>
  );
}
