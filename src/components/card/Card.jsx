import Image from "next/image";
import styles from "./index.module.scss";
import HistoryChart from "../historyChart";

//Image
import arrowGreen from "@/assets/iconsProject/arrowGreen.svg";
import arrowRed from "@/assets/iconsProject/arrowRed.svg";
import image from "@/assets/iconsProject/bitcoin-btc-logo.png";

const Card = ({ data }) => {
	return (
		<div className={styles.Card}>
			<img src={data.image} alt="logo crypto" className={styles.Card__image} />
			<div className={styles.Card__info}>
				<p className={styles.Card__info__title}>{data.name}</p>
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
								? styles.negative
								: styles.positive
						}`}
					>
						{data?.price_change_percentage_24h} %
					</p>
				</div>
			</div>
			<div className={styles.Card__chart}>
				<HistoryChart id={data.id} />
			</div>
		</div>
	);
};

export default Card;
