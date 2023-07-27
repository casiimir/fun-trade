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
  const [isSelected, setIsSelected] = useState([false, false, true, false, false]);

  const onHandleDummy = () => {
    setIsSelected([true, false, false, false, false]);
  };
  const onHandleWallet = () => {
    setIsSelected([false, true, false, false, false]);
  };
  const onHandleHomepage = () => {
    setIsSelected([false, false, true, false, false]);
  };
  const onHandleAcademy = () => {
    setIsSelected([false, false, false, true, false]);
  };
  const onHandleSettings = () => {
    setIsSelected([false, false, false, false, true]);
  };

  console.log(isSelected);
  return (
    <header>
      <nav>
        <ul className={styles.Navbar}>
          <Link href="#">
            <li
              className={`${styles.wrapper} ${isSelected[0] && styles.selected}`}
              onClick={onHandleDummy}
            >
              <Image src={arrowIcon} alt="dummy" width={30} height={30} />
              <p className={styles.label}>dummy</p>
            </li>
          </Link>
          <Link href="/profile">
            <li
              className={`${styles.wrapper} ${isSelected[1] && styles.selected}`}
              onClick={onHandleWallet}
            >
              <Image src={walletIcon} alt="wallet" width={30} height={30} />
              <p className={styles.label}>wallet</p>
            </li>
          </Link>
          <Link href="/homepage">
            <li
              className={`${styles.wrapper} ${isSelected[2] && styles.selected}`}
              onClick={onHandleHomepage}
            >
              <Image src={homeIcon} alt="home" width={30} height={30} />
              <p className={styles.label}>home</p>
            </li>
          </Link>
          <Link href="/funAcademy">
            <li
              className={`${styles.wrapper} ${isSelected[3] && styles.selected}`}
              onClick={onHandleAcademy}
            >
              <Image src={academyIcon} alt="academy" width={30} height={30} />
              <p className={styles.label}>academy</p>
            </li>
          </Link>
          <Link href="#">
            <li
              className={`${styles.wrapper} ${isSelected[4] && styles.selected}`}
              onClick={onHandleSettings}
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
