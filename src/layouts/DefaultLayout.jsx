import { useContext } from "react";
import { UserContext } from "@/pages/_app";
import Overlay from "@/components/overlay";
import NavbarTop from "@/components/navbarTop";
import NavbarBottom from "@/components/navbarBottom";
import styles from "./DefaultLayout.module.scss";
import Sidebar from "@/components/sidebar";
import Search from "@/components/search";

const DefaultLayout = ({ children }) => {
  const { isSearchOpen, setIsSearchOpen } = useContext(UserContext);

  return (
    <>
      <header className={styles.header}>
        {isSearchOpen && <Overlay />}
        <Search />
      </header>
      <NavbarTop />
      <div className={styles.container}>
        <aside className={styles.Sidebar}>
          <Sidebar />
        </aside>
        <section className={`${true && styles.content}`}>{children}</section>
      </div>
      <NavbarBottom />
    </>
  );
};

export default DefaultLayout;
