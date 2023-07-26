import { useRouter } from "next/router";
import styles from "./NavbarTop.module.scss";
import Menu from "../menu";
import { useState } from "react";

const NavbarTop = ({ items }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const onHandleClick = (page) => {
    // router.push(`/${page}`);
    setIsOpen((prev) => !prev);
  };

  return (
    <header className={styles.Navbar}>
      {items?.map((item) => (
        <div
          key={item.id}
          className={`${styles.container} ${item?.label === "logo" ? styles.logo : ""}`}
          onClick={() => onHandleClick(item.label)}
        >
          {item.icon}
        </div>
      ))}
      <div className={`${styles.burger} ${isOpen && styles.open}`}>
        <Menu setIsOpen={setIsOpen} />
      </div>
    </header>
  );
};

export default NavbarTop;
