import { useEffect, useState, useContext } from "react";
import DefaultLayout from "@/layouts/DefaultLayout";
import styles from "../styles/homepage.module.scss";
import CardList from "@/components/cardList";
import { useRouter } from "next/router";
import { UserContext } from "./_app";

//Mocks
import crypto from "@/mock/cryptoCardMock";
import Chart from "@/components/chart";
import Image from "next/image";
import cryptoIcon from "../assets/iconsProject/bitcoin.svg";

export default function homepage() {
	const [cryptoDatas, setCryptoDatas] = useState(crypto);
	const [balance, setBalance] = useState(null);
	const router = useRouter();

	const onHandelCrypto = () => {
		router.push("/cryptovalutes");
	};

	// console.log(userData);

	useEffect(() => {
		setCryptoDatas(crypto);
	}, []);

	useEffect(() => {
		const getUserData = () => {
			const userDataString = localStorage.getItem("UserData");
			if (userDataString) {
				const userDataObject = JSON.parse(userDataString);
				setBalance(userDataObject.balance);
			}
		};

		getUserData();
	}, []);

	return (
		<DefaultLayout>
			<div className={styles.homepage}>
				<div className={styles.homepage__container}>
					<div className={styles.homepage__container__desktopLeftWrapper}>
						<div
							className={
								styles.homepage__container__desktopLeftWrapper__myBalance
							}
						>
							<div
								className={
									styles.homepage__container__desktopLeftWrapper__myBalance__info
								}
							>
								<p
									className={
										styles.homepage__container__desktopLeftWrapper__myBalance__info__title
									}
								>
									My Balance
								</p>
								<p
									className={
										styles.homepage__container__desktopLeftWrapper__myBalance__info__wallet
									}
								>
									{balance} $
								</p>
							</div>
							<div
								className={
									styles.homepage__container__desktopLeftWrapper__myBalance__chart
								}
							>
								<Chart />
							</div>
						</div>
					</div>
					<div className={styles.homepage__container__desktopRightWrapper}>
						<CardList cryptoDatas={cryptoDatas} />
					</div>
				</div>
			</div>
		</DefaultLayout>
	);
}
