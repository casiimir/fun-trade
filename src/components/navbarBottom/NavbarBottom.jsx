import Link from "next/link";
import Image from "next/image";
import styles from "./NavbarBottom.module.scss";
// icone
import arrowIcon from "../../assets/iconsProject/arrow.svg";
import walletIcon from "../../assets/iconsProject/wallet.svg";
import homeIcon from "../../assets/iconsProject/home.svg";
import academyIcon from "../../assets/iconsProject/school.svg";
import settingsIcon from "../../assets/iconsProject/setting.svg";

const NavbarBottom = () => {
  return (
    <header>
      <nav>
        <ul className={styles.Navbar}>
          <Link href="#">
            <li className={styles.wrapper}>
              <Image src={arrowIcon} alt="dummy" width={30} height={30} />
              <p className={styles.label}>dummy</p>
            </li>
          </Link>
          <Link href="/profile">
            <li className={styles.wrapper}>
              <Image src={walletIcon} alt="wallet" width={30} height={30} />
              <p className={styles.label}>wallet</p>
            </li>
          </Link>
          <Link href="/homepage">
            <li className={styles.wrapper}>
              <Image src={homeIcon} alt="home" width={30} height={30} />
              <p className={styles.label}>home</p>
            </li>
          </Link>
          <Link href="/funAcademy">
            <li className={styles.wrapper}>
              <Image src={academyIcon} alt="academy" width={30} height={30} />
              <p className={styles.label}>academy</p>
            </li>
          </Link>
          <Link href="#">
            <li className={styles.wrapper}>
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
