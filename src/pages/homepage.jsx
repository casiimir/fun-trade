import { useEffect, useState } from "react";
import styles from "../styles/homepage.module.scss";
import CardList from "@/components/cardList/CardList";

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
        <p>99.999 $</p>
      </div>
      <div className={styles.categories}>
        <h3>sfoglia categorie</h3>
        <div>
          <p>Cryptovalute</p>
          <img src="" alt="" />
        </div>
      </div>
      <div>
        <h3 className={styles.mover_principali}>Mover Principali</h3>
        <CardList cryptoDatas={cryptoDatas} />
      </div>
    </div>
  );
}
