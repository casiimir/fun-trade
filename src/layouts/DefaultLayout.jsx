import NavbarTop from "@/components/navbarTop";
import NavbarBottom from "@/components/navbarBottom";
import styles from "./DefaultLayout.module.scss";
import Sidebar from "@/components/sidebar";
import Search from "@/components/search";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <header className={styles.Search}>
        <Search />
      </header>
      <NavbarTop />
      <section className={`${true && styles.content}`}>{children}</section>
      <NavbarBottom />
    </>
  );
};

export default DefaultLayout;
