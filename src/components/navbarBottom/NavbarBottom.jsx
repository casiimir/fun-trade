import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { UserContext } from "@/pages/_app";
import styles from "./NavbarBottom.module.scss";
// icone
import cryptoIcon from "../../assets/iconsProject/bitcoin.svg";
import walletIcon from "../../assets/iconsProject/wallet.svg";
import homeIcon from "../../assets/iconsProject/home.svg";
import academyIcon from "../../assets/iconsProject/school.svg";
import TeamIcon from "../../assets/iconsProject/teamImg/TeamIcon.svg";
const NavbarBottom = () => {
  const { selectedPage, setSelectedPage } = useContext(UserContext);

  const onHandleSelect = (e) => setSelectedPage(e.currentTarget.id);

  return (
    <header>
      <nav>
        <ul className={styles.Navbar}>
          <Link href="cryptovalutes">
            <li
              className={`${styles.wrapper} ${
                selectedPage === "cryptovalutes" && styles.selected
              }`}
              onClick={onHandleSelect}
              id="cryptovalutes"
            >
              <Image src={cryptoIcon} alt="favorite" width={30} height={30} />
              <p className={styles.label}>Crypto</p>
            </li>
          </Link>
          <Link href="/profile">
            <li
              className={`${styles.wrapper} ${
                selectedPage === "profile" && styles.selected
              }`}
              onClick={onHandleSelect}
              id="profile"
            >
              <Image src={walletIcon} alt="wallet" width={30} height={30} />
              <p className={styles.label}>Wallet</p>
            </li>
          </Link>
          <Link href="/homepage">
            <li
              className={`${styles.wrapper} ${
                selectedPage === "homepage" && styles.selected
              }`}
              onClick={onHandleSelect}
              id="homepage"
            >
              <Image src={homeIcon} alt="home" width={30} height={30} />
              <p className={styles.label}>Home</p>
            </li>
          </Link>
          <Link href="/funAcademy">
            <li
              className={`${styles.wrapper} ${
                selectedPage === "academy" && styles.selected
              }`}
              onClick={onHandleSelect}
              id="academy"
            >
              <Image src={academyIcon} alt="academy" width={30} height={30} />
              <p className={styles.label}>Academy</p>
            </li>
          </Link>
          <Link href="/about">
            <li
              className={`${styles.wrapper} ${
                selectedPage === "aboutus" && styles.selected
              }`}
              onClick={onHandleSelect}
              id="settings"
            >
              <Image src={TeamIcon} alt="about us" width={30} height={30} />
              <p className={styles.label}>About us</p>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default NavbarBottom;
