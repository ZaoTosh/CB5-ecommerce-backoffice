import styles from "./styles.module.scss";
import logo from "./car.jpg";
const Header = () => {
  return (
    <div className={styles.main}>
      <h1>Automobile Ferrari</h1>
      <h2>
        Discover how Ferrari maintains its mystique as the world's most powerful
        brand
      </h2>
      <img src={logo} alt="React Image" />
    </div>
  );
};

export default Header;
