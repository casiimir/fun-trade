import { useEffect, useState } from "react";
import styles from "../styles/homepage.module.scss";

export default function homepage() {
  const [cryptoDatas, setCryptoDatas] = useState();
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
    )
      .then((res) => res.json())
      .then((data) => setCryptoDatas(data));
  }, []);

  return (
    <div className={styles.homepage}>
      <div className={styles.my_balance_contain}>
        <h1 className={styles.my_balance}>My Balance</h1>
        <p>99.999</p>
      </div>
      <div className={styles.categories}>sfoglia categorie</div>
      <div>
        <h3 className={styles.mover_principali}>Mover Principali</h3>
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
                  <p>{item?.price_change_percentage_24h}</p>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
