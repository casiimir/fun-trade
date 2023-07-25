import styles from "./index.module.scss";
import React from "react";

const CardList = ({ cryptoDatas }) => {
  return (
    <div className={styles.CardList}>
      <ul className={styles.balance_list}>
        {cryptoDatas &&
          cryptoDatas.map((item) => (
            <li className={styles.crypto} key={item.id}>
              <div className={styles.image_contain}>
                <img
                  className={styles.image_crypto}
                  src={item?.image}
                  alt={item?.name}
                />
              </div>
              <div className={styles.info_cripto}>
                <h4>{item?.name}</h4>
                <div className={styles.price_info}>
                  <div className={styles.arrow_contain}>
                    <span
                      className={`${
                        item?.price_change_percentage_24h < 0
                          ? styles.downArrow
                          : styles.upArrow
                      }`}
                    ></span>
                  </div>

                  <p
                    className={`${
                      item?.price_change_percentage_24h < 0
                        ? styles.negative
                        : styles.positive
                    }`}
                  >
                    {item?.price_change_percentage_24h} %
                  </p>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CardList;
