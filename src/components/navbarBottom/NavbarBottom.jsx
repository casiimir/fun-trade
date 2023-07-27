import Link from "next/link";
import Image from "next/image";
import styles from "./NavbarBottom.module.scss";
// icone
import arrowIcon from "../../assets/iconsProject/arrow.svg";
import walletIcon from "../../assets/iconsProject/wallet.svg";
import homeIcon from "../../assets/iconsProject/home.svg";
import academyIcon from "../../assets/iconsProject/school.svg";
import settingsIcon from "../../assets/iconsProject/setting.svg";
import { useState } from "react";

const NavbarBottom = () => {
  const [selected, setSelected] = useState("homepage");

  const onHandleSelect = (e) => setSelected(e.currentTarget.id);

  return (
    <header>
      <nav>
        <ul className={styles.Navbar}>
          <Link href="#">
            <li
              className={`${styles.wrapper} ${selected === "#" && styles.selected}`}
              onClick={onHandleSelect}
              id="#"
            >
              <Image src={arrowIcon} alt="dummy" width={30} height={30} />
              <p className={styles.label}>dummy</p>
            </li>
          </Link>
          <Link href="/profile">
            <li
              className={`${styles.wrapper} ${selected === "profile" && styles.selected}`}
              onClick={onHandleSelect}
              id="profile"
            >
              <Image src={walletIcon} alt="wallet" width={30} height={30} />
              <p className={styles.label}>wallet</p>
            </li>
          </Link>
          <Link href="/homepage">
            <li
              className={`${styles.wrapper} ${
                selected === "homepage" && styles.selected
              }`}
              onClick={onHandleSelect}
              id="homepage"
            >
              <Image src={homeIcon} alt="home" width={30} height={30} />
              <p className={styles.label}>home</p>
            </li>
          </Link>
          <Link href="/funAcademy">
            <li
              className={`${styles.wrapper} ${selected === "academy" && styles.selected}`}
              onClick={onHandleSelect}
              id="academy"
            >
              <Image src={academyIcon} alt="academy" width={30} height={30} />
              <p className={styles.label}>academy</p>
            </li>
          </Link>
          <Link href="#">
            <li
              className={`${styles.wrapper} ${
                selected === "settings" && styles.selected
              }`}
              onClick={onHandleSelect}
              id="settings"
            >
              <Image src={settingsIcon} alt="settings" width={30} height={30} />
              <p className={styles.label}>settings</p>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default NavbarBottom;
