import styles from "./styles.module.scss";
import { navBarLink } from "./../../constants/navbar.js";
import logo from "./icon-ferrari.png";
import LiNavBar from "../LiNavBar";
const NavBar = ({ setRoute }) => {
  return (
    <div className={styles.main}>
      <img src={logo} alt="React Image" />
      <ul>
        {navBarLink.map((item) => (
          <LiNavBar
            key={item.id}
            icon={item.icon}
            label={item.label}
            setRoute={setRoute}
            routeUrl={item.route}
          />
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
