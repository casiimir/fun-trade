import React, { useContext, useEffect, useState } from "react";
import { userContext } from "@/pages";
import NavbarTop from "@/components/navbarTop";
import NavbarBottom from "@/components/navbarBottom";
import { navbarItems } from "../mock/navbarItems";
import styles from "./DefaultLayout.module.scss";

const DefaultLayout = ({ children }) => {
	// const value = useContext(userContext);
	const [isLogged, setIsLogged] = useState(false);

	return (
		<>
			{true && <NavbarTop items={navbarItems[0].items} />}
			<section className={`${true && styles.content}`}>{children}</section>
			{true && <NavbarBottom />}
		</>
	);
};

export default DefaultLayout;
