import { useEffect, useState } from "react";
import styles from "../styles/Homepage.module.scss";
import CardList from "@/components/cardList";

//Mocks
import crypto from "@/mock/cryptoCardMock";

export default function Homepage() {
	const [cryptoDatas, setCryptoDatas] = useState([]);

	useEffect(() => {
		setCryptoDatas(crypto);
	}, []);

	return (
		<div className={styles.Homepage}>
			<div className={styles.HomePage__myBalance}>
				<h1 className={styles.HomePage__myBalance__title}>My Balance</h1>
				<p className={styles.HomePage__myBalance__wallet}>99.999 $</p>
			</div>
			<div className={styles.Homepage__categories}>
				<h3 className={styles.Homepage__categories__h3}>sfoglia categorie</h3>

				<div className={styles.Homepage__categories__crypto_list}>
					<p className={styles.Homepage__categories__crypto_list__title}>
						Criptovalute
					</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="51"
						height="41"
						viewBox="0 0 51 41"
						fill="none"
					>
						<path
							d="M48.3158 34.1667V36.4444C48.3158 38.95 45.9 41 42.9474 41H5.36842C2.38895 41 0 38.95 0 36.4444V4.55556C0 2.05 2.38895 0 5.36842 0H42.9474C45.9 0 48.3158 2.05 48.3158 4.55556V6.83333H24.1579C21.1784 6.83333 18.7895 8.88333 18.7895 11.3889V29.6111C18.7895 32.1167 21.1784 34.1667 24.1579 34.1667H48.3158ZM24.1579 29.6111H51V11.3889H24.1579V29.6111ZM34.8947 23.9167C32.6668 23.9167 30.8684 22.3906 30.8684 20.5C30.8684 18.6094 32.6668 17.0833 34.8947 17.0833C37.1226 17.0833 38.9211 18.6094 38.9211 20.5C38.9211 22.3906 37.1226 23.9167 34.8947 23.9167Z"
							fill="url(#paint0_linear_6_63)"
						/>
						<defs>
							<linearGradient
								id="paint0_linear_6_63"
								x1="0"
								y1="20.5"
								x2="61.4013"
								y2="20.5"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#E49BE6" />
								<stop offset="1" stop-color="#A6C4FF" />
							</linearGradient>
						</defs>
					</svg>
				</div>
				<CardList cryptoDatas={cryptoDatas} />
			</div>
		</div>
	);
}
