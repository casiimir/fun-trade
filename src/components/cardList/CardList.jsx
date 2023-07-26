import React from "react";
import styles from "./index.module.scss";

import arrowGreen from "../../assets/iconsProject/arrowGreen.svg";
import arrowRed from "../../assets/iconsProject/arrowRed.svg";
import Card from "../card/Card";

const CardList = ({ cryptoDatas }) => {
	return (
		<div className={styles.CardList_contain}>
			<h1>Criptovalute</h1>
			<div className={styles.CardList}>
				<ul className={styles.balance_list}>
					{cryptoDatas && cryptoDatas.map((item) => <Card data={item} />)}
				</ul>
			</div>
		</div>
	);
};

export default CardList;
