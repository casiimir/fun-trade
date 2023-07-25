import { useRouter } from "next/router";
import styles from "./NavbarTop.module.scss";

const NavbarTop = ({ items }) => {
  const router = useRouter();

  const onHandleClick = (page) => {
    router.push(`/${page}`);
  };

  return (
    <header className={styles.Navbar}>
      {items.map((item) => (
        <div
          key={item.id}
          className={`${styles.container} ${item.label === "logo" ? styles.logo : ""}`}
          onClick={() => onHandleClick(item.label)}
        >
          {item.icon}
        </div>
      ))}
    </header>
  );
};

export default NavbarTop;
