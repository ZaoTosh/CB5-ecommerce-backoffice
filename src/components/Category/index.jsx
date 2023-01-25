import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { GET } from "../../Utils/index";
import Table from "../Table";

const Category = () => {
  const categoriesStateInit = {
    categories: [],
    loading: true,
  };
  const [categoriesState, setCategoriesState] = useState(categoriesStateInit);

  const getData = () => {
    setCategoriesState({ ...categoriesState, loading: true });
    GET("categories").then((data) =>
      setCategoriesState({
        loading: false,
        categories: data,
      })
    );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.component}>
        <h1>Category</h1>
      </div>
      <Table
        categoriesState={categoriesState.categories}
        loading={categoriesState.loading}
        getData={getData}
      />
    </div>
  );
};

export default Category;
