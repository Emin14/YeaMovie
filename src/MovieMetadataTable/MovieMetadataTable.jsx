import React from 'react'
import styles from './MovieMetadataTable.module.css'

export default function MovieMetadataTable({metadata}) {

   console.log(metadata)
   const metadataFiltered  = metadata.filter(item => item.data)
   console.log(metadataFiltered)
   
   if(!metadataFiltered.length) {
      return null
   }

  return (
      <table className={styles.table}>
         <tbody>
         {metadataFiltered.map(item => {
            const data = Array.isArray(item.data) ? 
            item.data.map((item, index, array) => <span>{item.name}{index < array.length -1 ? ', ' : ''}</span>) :
            item.data

            return  (
               <tr>
                  <td>{item.ru}:</td>
                  <td>{data}</td>
               </tr>
         )})}
         </tbody>
      </table>
  )
}
