import React, { useContext } from "react";
import { UserContext } from "@/pages/_app";
import NavbarTop from "@/components/navbarTop";
import NavbarBottom from "@/components/navbarBottom";
import { navbarItems } from "../mock/navbarItems";
import styles from "./DefaultLayout.module.scss";

const DefaultLayout = ({ children }) => {
  const { nav } = useContext(UserContext);

  return (
    <>
      {nav && <NavbarTop items={navbarItems[0].items} />}
      <section className={`${nav && styles.content}`}>{children}</section>
      {nav && <NavbarBottom />}
    </>
  );
};

export default DefaultLayout;
