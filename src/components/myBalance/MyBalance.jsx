import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import Chart from "@/components/chart";

const MyBalance = () => {
	const [balance, setBalance] = useState(null);

	useEffect(() => {
		const getUserData = () => {
			const userDataString = localStorage.getItem("users");
			if (userDataString) {
				const userDataObject = JSON.parse(userDataString);
				setBalance(userDataObject.balance);
			}
		};

		getUserData();
	}, []);

	return (
		<div className={styles.MyBalance}>
			<h1>My Balance</h1>
			<p>{balance}</p>
			<Chart />
		</div>
	);
};

export default MyBalance;
