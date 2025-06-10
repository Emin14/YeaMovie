import styles from "./MovieMetadataTable.module.css";

export default function MovieMetadataTable({ metadata = [], className }) {
  const metadataFiltered = metadata.filter((item) => item.data);

  if (!metadataFiltered.length) {
    return null;
  }

  return (
    <table className={`${styles.table} ${className}`}>
      <tbody>
        {metadataFiltered.map((item) => {
          const data = Array.isArray(item.data)
            ? item.data.map((item, index, array) => (
                <span key={item.name}>
                  {item.name}
                  {index < array.length - 1 ? ", " : ""}
                </span>
              ))
            : item.data;

          return (
            <tr key={item.ru}>
              <td>{item.ru}:</td>
              <td>{data}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
