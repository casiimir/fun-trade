import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";

import arrowGreen from "../../assets/iconsProject/arrowGreen.svg";
import arrowRed from "../../assets/iconsProject/arrowRed.svg";

const CardList = ({ cryptoDatas }) => {
  return (
    <div className={styles.CardList_contain}>
      <h1>Criptovalute</h1>
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
                      <Image
                        src={
                          item?.price_change_percentage_24h < 0
                            ? arrowRed
                            : arrowGreen
                        }
                        width={20}
                        height={20}
                        alt="Arrow"
                      />
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
    </div>
  );
};

export default CardList;
