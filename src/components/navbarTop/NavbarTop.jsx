import Image from "next/image";
import styles from "./NavbarTop.module.scss";
import Menu from "../menu";
import { useState } from "react";
import Overlay from "../overlay/Overlay";
import burgerIcon from "../../assets/iconsProject/hamburger.svg";
import logoIcon from "../../assets/iconsProject/logo.svg";
import searchIcon from "../../assets/iconsProject/search.svg";

const NavbarTop = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onHandleClickBurger = () => {
    setIsOpen((prev) => !prev);
  };
  const onHandleClickSearch = () => {
    // setIsOpen((prev) => !prev);
  };

  return (
    <>
      <header className={styles.Navbar}>
        <nav>
          <ul className={styles.Navbar}>
            {isOpen && <Overlay setIsOpen={setIsOpen} />}
            <li className={styles.container}>
              <Image
                src={burgerIcon}
                alt="menu"
                width={30}
                height={30}
                onClick={onHandleClickBurger}
              />
              <div className={`${styles.burger} ${isOpen && styles.open}`}>
                <Menu setIsOpen={setIsOpen} />
              </div>
            </li>
            <li className={`${styles.logo}`}>
              <Image src={logoIcon} alt="logo" width={50} height={50} />
            </li>
            <li className={styles.container} onClick={onHandleClickSearch}>
              <Image src={searchIcon} alt="search" width={30} height={30} />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavbarTop;
