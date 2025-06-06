import styles from './Filters.module.css'

export default function Filters({filtersData, selectedFilters, setSelectedFilters}) {

   const handleSelectChange = (event) => {
    let {value, name} = event.target
    setSelectedFilters(prev => ({...prev, [name]: value}))
   }

  return (
   <form className={styles.filters}>
      <select 
      className={styles.select}
      name='genre'
      value={selectedFilters.genre}
      onChange={handleSelectChange}
      >
         <option value="">Все категории</option>
         {filtersData.genres.map(item => (
            <option value={item.name}>{item.name}</option>
         ))}
      </select>
      <select 
      className={styles.select}
      name='country'
      value={selectedFilters.country}
      onChange={handleSelectChange}
      >
         <option value="">Все страны</option>
         {filtersData.countries.map(item => (
            <option value={item.name}>{item.name}</option>
         ))}
      </select>
      <select 
      className={styles.select}
      name='year'
      value={selectedFilters.year}
      onChange={handleSelectChange}
      >
         <option value="">Все года</option>
         {filtersData.years.map(item => (
            <option value={item}>{item}</option>
         ))}
      </select>
      <select 
      className={styles.select}
      name='rating'
      value={selectedFilters.rating}
      onChange={handleSelectChange}
      >
         <option value="">Все рейтинги</option>
         {filtersData.rating.map(item => (
            <option value={item}>от {item}</option>
         ))}
      </select>
   </form>
  )
}
