import styles from "./index.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";

import arrow from "@/assets/iconsProject/arrow.svg";
import heart from "@/assets/iconsProject/heart.svg";
import Chart from "@/components/chart";

export default function InfoCard({ data }) {
  const router = useRouter();

  const onHandleBack = () => {
    router.back();
  };

  return (
    <div className={styles.InfoCard}>
      <div className={styles.InfoCard__topBar}>
        <Image
          className={styles.InfoCard__arrow}
          src={arrow}
          alt="back"
          width={30}
          height={30}
          onClick={onHandleBack}
        />
        <div className={styles.InfoCard__profile}>
          <div className={styles.InfoCard__container}>
            <div className={styles.InfoCard__imgContain}>
              <img
                className={styles.InfoCard__logo}
                src={data?.image?.small}
                alt={data.name}
              />
            </div>
            <div className={styles.InfoCard__preferiti}>
              <Image src={heart} alt="back" width={20} height={20} />
              <p>aggiungi ai preferiti</p>
            </div>
          </div>
        </div>
      </div>
      <h1 className={styles.InfoCard__name}>{data.name}</h1>
      <div className={styles.InfoCard__infoPrice}>
        <p>{data?.current_price}</p>
      </div>
      <div className={styles.InfoCard__charts}>
        <Chart />
      </div>
      <div className={styles.InfoCard__info}>
        <h3 className={styles.InfoCard__pName}>Carta d'identità</h3>
        <p className={styles.InfoCard__description}>
          {data.description.en.slice(0, 300) + "..."}
        </p>
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
