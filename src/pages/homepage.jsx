import { useEffect, useState } from "react";
import styles from "../styles/homepage.module.scss";
import CardList from "@/components/cardList";
import { useRouter } from "next/router";

//Mocks
import crypto from "@/mock/cryptoCardMock";
import Chart from "@/components/chart";
import Image from "next/image";
import cryptoIcon from "../assets/iconsProject/bitcoin.svg";

export default function homepage() {
	const [cryptoDatas, setCryptoDatas] = useState([]);

	const router = useRouter();

	const onHandelCrypto = () => {
		router.push("/cryptovalutes");
	};

	useEffect(() => {
		setCryptoDatas(crypto);
	}, []);

	return (
		<div className={styles.homepage}>
			<div className={styles.homepage__myBalance}>
				<div className={styles.homepage__myBalance__info}>
					<p className={styles.homepage__myBalance__info__title}>My Balance</p>
					<p className={styles.homepage__myBalance__info__wallet}>99.999 $</p>
				</div>
				<div className={styles.homepage__myBalance__chart}>
					<Chart />
				</div>
			</div>
			<div className={styles.homepage__categories}>
				<h3 className={styles.homepage__categories__h3}>Sfoglia Categorie</h3>
				<div className={styles.homepage__categories__crypto_list}>
					<div
						className={styles.homepage__categories__crypto_list__card}
						onClick={onHandelCrypto}
					>
						<p
							className={styles.homepage__categories__crypto_list__card__title}
						>
							Criptovalute
						</p>
						<Image src={cryptoIcon} alt="cryptoIcon" width={40} height={40} />
					</div>
				</div>
			</div>
			<CardList cryptoDatas={cryptoDatas} />
		</div>
	);
}
