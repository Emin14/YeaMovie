import React, { useState } from 'react'
import { useFetchMovieFrames } from './useFetchMovieFrames'
import styles from './MovieFrames.module.css'
import { images } from './delete'
import ImageSlider from '../ImageSlider/ImageSlider'
import Button from '../Button/Button'

export default function MovieFrames({id, className}) {
  //  const {images} = useFetchMovieFrames(id)
   console.log(images)
    const [isModalOpen, setIsModalOpen] = useState(false);

      const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };


  return (
    <div className={styles.fragments}>
       <Button className={styles.fragmentButton}>Кадры из фильма</Button>
       <div className={styles.next}>
          <button onClick={openModal}>Смотреть все</button>
          <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
             <line y1="-0.5" x2="9.21954" y2="-0.5" transform="matrix(0.650791 0.759257 -0.650791 0.759257 1 1)" stroke="#080423"/>
             <line y1="-0.5" x2="9.21954" y2="-0.5" transform="matrix(0.650791 -0.759257 0.650791 0.759257 1 15)" stroke="#080423"/>
          </svg>
       </div >
           <div className={`${styles.frames} ${className}`}>
      {images.map(item => (
      <img className={styles.frame} src={item.previewUrl} alt="" />
      ))}
      {isModalOpen && <ImageSlider images={images} closeModal={closeModal}/>}
      </div>
    </div>
  )
}
