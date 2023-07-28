import Image from "next/image";
import styles from "./index.module.scss";
import HistoryChart from "../historyChart";
import { useRouter } from "next/router";

//Image
import arrowGreen from "@/assets/iconsProject/arrowGreen.svg";
import arrowRed from "@/assets/iconsProject/arrowRed.svg";

const Card = ({ data }) => {
  const router = useRouter();

  const onHandleCrypto = () => {
    router.push(`/cryptovalutes/${data.id}`);
  };

  return (
    <div
      onClick={onHandleCrypto}
      className={`${
        data?.price_change_percentage_24h < 0 ? styles.Negative : styles.Card
      } `}
    >
      <img src={data?.image} alt="logo crypto" className={styles.Card__image} />
      <div className={styles.Card__info}>
        <p className={styles.Card__info__title}>{data?.name}</p>
        <div className={styles.Card__info__balance}>
          <Image
            src={data?.price_change_percentage_24h < 0 ? arrowRed : arrowGreen}
            width={20}
            height={20}
            alt="Arrow"
          />
          <p
            className={`${
              data?.price_change_percentage_24h < 0
                ? styles.Card__info__balance__negative
                : styles.Card__info__balance__positive
            } ${styles.Card__info__balance__p}`}
          >
            {`${data?.price_change_percentage_24h}`}
          </p>
        </div>
      </div>
      <div className={styles.Card__chart}>
        <HistoryChart id={data?.id} />
      </div>
    </div>
  );
};

export default Card;
