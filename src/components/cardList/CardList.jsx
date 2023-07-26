import React from "react";
import styles from "./index.module.scss";

import Card from "../card/Card";

const CardList = ({ cryptoDatas }) => {
	return (
		<div className={styles.CardList_contain}>
			<h1>Criptovalute</h1>
			<div className={styles.CardList}>
				<ul className={styles.balance_list}>
					{cryptoDatas &&
						cryptoDatas.map((item) => <Card data={item} key={item.id} />)}
				</ul>
			</div>
		</div>
	);
};

export default CardList;
