import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { UserContext } from "@/pages/_app";
import styles from "./Menu.module.scss";

//firebasae
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";

//icons
import closeIcon from "../../assets/iconsProject/close-menu.svg";
import profileIcon from "../../mock/profile-icon.svg";

const Menu = ({ setIsBurgerOpen }) => {
  const { selectedPage, setSelectedPage } = useContext(UserContext);
  const [userData, setUserData] = useState({});
  const router = useRouter();

  useEffect(() => {
    let userData = JSON.parse(localStorage.getItem("UserData")) || {};
    setUserData(userData);
  }, []);

  const onHandleLogout = () => {
    signOut(auth).then(() => {
      router.push("/");
    });
  };

  const onHandleClick = () => setIsBurgerOpen((prev) => !prev);

  const onHandleSelect = (e) => setSelectedPage(e.currentTarget.id);

  return (
    <section className={styles.Menu}>
      <button onClick={onHandleClick} className={styles.closeBtn}>
        <Image src={closeIcon} alt="close" width={40} height={40} />
      </button>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.image}>
            <Image
              src={userData ? userData.avatar : profileIcon}
              alt="profile"
              width={70}
              height={70}
            />
          </div>
          <div className={styles.text}>
            <p className={styles.text__name}>{userData ? userData.username : "user"}</p>
            <p className={styles.text__accountType}>Premium account</p>
          </div>
        </div>
        <ul className={styles.menuList}>
          <Link href="/homepage">
            <li
              id="homepage"
              className={styles.menuList__content}
              onClick={onHandleSelect}
            >
              Home
            </li>
          </Link>
          <Link href="/profile">
            <li
              id="profile"
              className={styles.menuList__content}
              onClick={onHandleSelect}
            >
              Wallet
            </li>
          </Link>
          <Link href="/funAcademy">
            <li
              id="academy"
              className={styles.menuList__content}
              onClick={onHandleSelect}
            >
              Academy
            </li>
          </Link>
          <Link href="cryptovalutes">
            <li
              id="cryptovalutes"
              className={styles.menuList__content}
              onClick={onHandleSelect}
            >
              Cryptovalutes
            </li>
          </Link>
          <Link href="about">
            <li
              id="aboutus"
              className={styles.menuList__content}
              onClick={onHandleSelect}
            >
              About us
            </li>
          </Link>
          <Link href="#">
            <li id="logout" className={styles.menuList__content} onClick={onHandleLogout}>
              Logout
            </li>
          </Link>
        </ul>
      </div>
    </section>
  );
};

export default Menu;
