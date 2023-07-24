import { useRouter } from "next/router";
import styles from "./NavbarBottom.module.scss";

const NavbarBottom = ({ items }) => {
  const router = useRouter();

  const onHandleClick = (page) => {
    router.push(`/${page}`);
  };

  return (
    <header className={styles.Navbar}>
      {items?.map((item) => (
        <div
          key={item.id}
          className={styles.wrapper}
          onClick={() => onHandleClick(item.label)}
        >
          <div className={styles.icon}>ICON</div>
          <p className={styles.label}>{item.label}</p>
        </div>
      ))}
    </header>
  );
};

export default NavbarBottom;
