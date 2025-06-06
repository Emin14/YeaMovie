import styles from './ContentWrapper.module.css'

export default function ContentWrapper({children, className}) {
  return (
    <div className={`${styles.contentWrapper} ${className}`}>
      {children}
   </div>
  )
}
