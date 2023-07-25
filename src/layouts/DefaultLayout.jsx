import React from "react";
import { UserContext } from "@/pages/_app";
import NavbarTop from "@/components/navbarTop";
import NavbarBottom from "@/components/navbarBottom";
import { navbarItems } from "../mock/navbarItems";
import styles from "./DefaultLayout.module.scss";

const DefaultLayout = ({ children }) => {
  const username = React.useContext(UserContext);

  return (
    <>
      {username && <NavbarTop items={navbarItems[0].items} />}
      <section className={styles.content}>{children}</section>
      {username && <NavbarBottom />}
    </>
  );
};

export default DefaultLayout;
