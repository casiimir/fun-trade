import styles from "./index.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";

import arrow from "@/assets/iconsProject/arrow.svg";
import heart from "@/assets/iconsProject/heart.svg";
import Chart from "@/components/chart";
import CryptoDatas from "@/mock/cryptoCardMock";
import Card from "@/components/card";

export default function InfoCard({ data }) {
  const router = useRouter();

  const onHandleBack = () => {
    router.back();
  };

  return (
    <div className={styles.InfoCard}>
      <div className={styles.InfoCard__topBar}>
        <div className={styles.InfoCard__arrowContain}>
          <Image
            className={styles.InfoCard__arrow}
            src={arrow}
            alt="back"
            width={30}
            height={30}
            onClick={onHandleBack}
          />
        </div>
        <div className={styles.InfoCard__profile}>
          <div className={styles.InfoCard__container}>
            <div className={styles.InfoCard__imgContain}>
              <div className={styles.InfoCard__imgBorder}>
                <img
                  className={styles.InfoCard__logo}
                  src={data?.image?.small}
                  alt={data.name}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.InfoCard__preferiti}>
          <p className={styles.InfoCard__preferitiTitle}>add</p>
          <Image src={heart} alt="back" width={20} height={20} />
        </div>
      </div>

      <div className={styles.InfoCard__containCard}>
        <div className={styles.InfoCard__charts}>
          <div className={styles.InfoCard__infoPrice}>
            <h1 className={styles.InfoCard__name}>{data.name}</h1>
            <p>{data.last}</p>
          </div>
          <Chart />
        </div>
        <div className={styles.InfoCard__info}>
          <h3 className={styles.InfoCard__pName}>Carta d'identità</h3>
          <p className={styles.InfoCard__description}>
            {data.description.en.slice(0, 300) + "..."}
          </p>
        </div>
      </div>
      <div className={styles.InfoCard__cardContain}>
        <div>
          <h2 className={styles.InfoCard__otherCrypto}>Vedi anche</h2>
          <div className={styles.InfoCard__cryptoList}>
            {CryptoDatas.map((data) => (
              <Card data={data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${context.query.id}`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
