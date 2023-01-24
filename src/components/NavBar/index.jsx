import styles from "./styles.module.scss";
import { navBarLink } from "./../../constants/navbar.js";
import logo from "./icon-ferrari.png";
const NavBar = () => {
  return (
    <div className={styles.main}>
      <img src={logo} alt="React Image" />
      <ul>
        {navBarLink.map((item) => (
          <li key={item.id}>
            {item.icon}
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
