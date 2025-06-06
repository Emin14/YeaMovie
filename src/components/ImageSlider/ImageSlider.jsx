import { useState } from 'react';
import styles from './ImageSlider.module.css';

const ImageSlider = ({ images, closeModal}) => {

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

  // Обработчики клавиатуры
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') goToPrev();
    if (e.key === 'ArrowRight') goToNext();
  };

  return (
    <div className={styles.gallery}>
        <div 
          className={styles.modalOverlay} 
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button 
              className={styles.closeButton}
              onClick={closeModal}
              aria-label="Закрыть галерею"
            >
              &times;
            </button>
            
            {/* Основное изображение */}
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
                    maxHeight: '80vh',
                    maxWidth: '100%',
                    aspectRatio: `${images[currentIndex].width}/${images[currentIndex].height}`
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
                  className={`${styles.previewThumbnail} ${index === currentIndex ? styles.active : ''}`}
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

            {/* Индикатор текущего положения */}
            <div className={styles.counter}>
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
    </div>
  );
};

export default ImageSlider;