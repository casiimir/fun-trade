import React from "react";
import styles from "./index.module.scss";

import Card from "../card";

const CardList = ({ cryptoDatas }) => {
  return (
    <div className={styles.CardList}>
      <h1 className={styles.CardList__title}>Criptovalute</h1>
      <div className={styles.CardList__wrap}>
        {cryptoDatas?.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
