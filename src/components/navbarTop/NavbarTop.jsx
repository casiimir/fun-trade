import { useRouter } from "next/router";
import styles from "./NavbarTop.module.scss";
import Menu from "../menu";
import { useState } from "react";

const NavbarTop = ({ items }) => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  const onHandleClick = (page) => {
    // router.push(`/${page}`);
    setIsVisible((prev) => !prev);
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
      {isVisible && <Menu setIsVisible={setIsVisible} />}
    </header>
  );
};

export default NavbarTop;
