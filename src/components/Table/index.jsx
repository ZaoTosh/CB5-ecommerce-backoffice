import styles from "./styles.module.scss";
import EditBtn from "./../EditBtn";
import DelBtn from "./../DelBtn";
import RefreshBtn from "./../RefreshBtn";
const Table = ({ categoriesState, getData, loading }) => {
  return (
    <div className={styles.main}>
      <div className={styles.tableHead}>
        <div className={styles.description}>
          <p>ID</p>
          <p>IMG</p>
          <p>Name</p>
        </div>
        <div>
          <RefreshBtn />
        </div>
      </div>
      {loading ? (
        "loading..."
      ) : (
        <div className={styles.tableBody}>
          {categoriesState.map((item) => (
            <div className={styles.tableSpace} key={item.id}>
              <div className={styles.tableRow}>
                <p>{item.id}</p>
                <img src={item.image} alt={item.name} />
                <p className={styles.name}>{item.name.substring(0, 30)}</p>
              </div>
              <div className={styles.update}>
                <EditBtn /> <DelBtn />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Table;
