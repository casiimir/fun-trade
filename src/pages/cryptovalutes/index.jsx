import Image from "next/image";
import DefaultLayout from "@/layouts/DefaultLayout";
import Card from "../../components/card";
import styles from "./index.module.scss";
import { useRouter } from "next/router";

//Mock
import crypto from "../../mock/peppe.js";

//Image
import arrow from "../../assets/iconsProject/arrow.svg";

export default function cryptovalutes() {
  const router = useRouter();

  const onHandleBack = () => {
    router.push("/homepage");
  };

  return (
    <DefaultLayout>
      <div className={styles.cryptovalutes}>
        <div className={styles.cryptovalutes__header}>
          <Image
            src={arrow}
            alt="back"
            width={30}
            height={30}
            onClick={onHandleBack}
          />
          <h1 className={styles.cryptovalutes__header__title}>Cryptovalute</h1>
        </div>
        <div className={styles.cryptovalutes__list}>
          {crypto.map((item) => (
            <Card key={item.id || index} data={item} />
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
}

// export const getServerSideProps = async () => {
// 	const res = await fetch(
// 		"https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=5&page=1&sparkline=false&locale=it"
// 	);
// 	const data = await res.json();
// 	return {
// 		props: {
// 			data,
// 		},
// 	};
// };
