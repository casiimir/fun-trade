import NavbarTop from "@/components/navbarTop";
import NavbarBottom from "@/components/navbarBottom";
import styles from "./DefaultLayout.module.scss";
import Sidebar from "@/components/sidebar";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <NavbarTop />
      <section className={`${true && styles.content}`}>{children}</section>
      <NavbarBottom />
    </>
  );
};

export default DefaultLayout;
