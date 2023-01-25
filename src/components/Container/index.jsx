import { useState } from "react";
import NavBar from "../NavBar";
import styles from "./styles.module.scss";
import Category from "../Category";
const Container = () => {
  const [route, setRoute] = useState("home");

  return (
    <div className={styles.main}>
      <div className={styles.sxColumn}>
        <NavBar setRoute={setRoute} />
      </div>
      <div className={styles.dxColumn}>
        {route === "home" && <div>Home</div>}
        {route === "magazine" && <div>Magazine</div>}
        {route === "products" && <div>Products</div>}
        {route === "category" && <Category />}
        {route === "users" && <div>Users</div>}
        {route === "contacts" && <div>Contacts</div>}
      </div>
    </div>
  );
};

export default Container;
