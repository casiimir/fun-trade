import Image from "next/image";
import styles from "./NavbarTop.module.scss";
import Menu from "../menu";
import Search from "../search";
import { useState, useContext } from "react";
import Overlay from "../overlay/Overlay";
import { UserContext } from "@/pages/_app";
// icons
import burgerIcon from "../../assets/iconsProject/hamburger.svg";
import logoIcon from "../../assets/iconsProject/logo.svg";
import searchIcon from "../../assets/iconsProject/search.svg";

const NavbarTop = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const { isSearchOpen, setIsSearchOpen } = useContext(UserContext);

  const onHandleClickBurger = () => {
    if (isSearchOpen) {
      setIsSearchOpen((prev) => !prev);
    }
    setIsBurgerOpen((prev) => !prev);
  };
  const onHandleClickSearch = () => setIsSearchOpen((prev) => !prev);

  return (
    <>
      <header>
        <nav>
          <ul className={styles.Navbar}>
            {isBurgerOpen && <Overlay setIsOpen={setIsBurgerOpen} />}
            {isSearchOpen && <Overlay setIsOpen={setIsSearchOpen} />}
            <div className={`${styles.burgerModal} ${isBurgerOpen && styles.open}`}>
              <Menu setIsBurgerOpen={setIsBurgerOpen} />
            </div>
            <li className={styles.container}>
              <Image
                src={burgerIcon}
                alt="menu"
                width={30}
                height={30}
                onClick={onHandleClickBurger}
              />
            </li>
            <li className={`${styles.logo}`}>
              <Image src={logoIcon} alt="logo" width={50} height={50} />
            </li>
            <li className={`${styles.container} ${styles.search}`}>
              <Image
                src={searchIcon}
                alt="search"
                width={30}
                height={30}
                onClick={onHandleClickSearch}
              />
              <div className={`${styles.searchModal} ${isSearchOpen && styles.open}`}>
                <Search />
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavbarTop;
