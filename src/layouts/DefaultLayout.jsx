import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "@/pages/_app";
import NavbarTop from "@/components/navbarTop";
import NavbarBottom from "@/components/navbarBottom";
import { navbarItems } from "../mock/navbarItems";
import styles from "./DefaultLayout.module.scss";

const DefaultLayout = ({ children }) => {
  const { nav } = useContext(UserContext);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    setIsLogged(JSON.parse(localStorage.getItem("login")));
  }, [nav]);

  return (
    <>
      {isLogged && <NavbarTop items={navbarItems[0].items} />}
      <section className={`${isLogged && styles.content}`}>{children}</section>
      {isLogged && <NavbarBottom />}
    </>
  );
};

export default DefaultLayout;
