import NavbarTop from "@/components/navbarTop";
import NavbarBottom from "@/components/navbarBottom";
import { navbarItems } from "../mock/navbarItems";
import styles from "./DefaultLayout.module.scss";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <NavbarTop items={navbarItems[0].items} />
      <section className={`${true && styles.content}`}>{children}</section>
      <NavbarBottom />
    </>
  );
};

export default DefaultLayout;
