import Image from "next/image";
import styles from "./Sidebar.module.scss";
import { menuList } from "@/mock/menuList";
import closeIcon from "../../assets/iconsProject/close-menu.svg";
// icons
import profileIcon from "../../mock/profile-icon.svg";
import homeIcon from "../../assets/iconsProject/home.svg";
import logoIcon from "../../assets/iconsProject/logo.svg";

const Sidebar = () => {
  return (
    <section className={styles.Sidebar}>
      {/* <button onClick={onHandleClick} className={styles.closeBtn}>
        <Image src={closeIcon} alt="close" width={40} height={40} />
      </button> */}
      <div className={styles.wrapper}>
        <div className={styles.icon}>
          <Image src={logoIcon} alt="logo" width={60} height={60} />
        </div>
        <div className={styles.fadein}>
          <h2 className={`${styles.title} ${styles.label}`}>funtrade</h2>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.icon}>
            <Image src={profileIcon} alt="profile" width={50} height={50} />
          </div>
          <div className={`${styles.profileText} ${styles.fadein}`}>
            <p className={`${styles.profileText__name} ${styles.label}`}>Totò Termini</p>
            <p className={`${styles.profileText__accountType} ${styles.label}`}>
              Premium account
            </p>
          </div>
        </div>
        <ul className={styles.menuList}>
          <li className={styles.menuList__wrapper}>
            <div className={styles.icon}>
              <Image src={homeIcon} alt="home" width={30} height={30} />
            </div>
            <div className={styles.fadein}>
              <p className={`${styles.content} ${styles.label}`}>Home</p>
            </div>
          </li>
          <li className={styles.menuList__wrapper}>
            <div className={styles.icon}>
              <Image src={homeIcon} alt="wallet" width={30} height={30} />
            </div>
            <div className={styles.fadein}>
              <p className={`${styles.content} ${styles.label}`}>wallet</p>
            </div>
          </li>
          <li className={styles.menuList__wrapper}>
            <div className={styles.icon}>
              <Image src={homeIcon} alt="favorites" width={30} height={30} />
            </div>
            <div className={styles.fadein}>
              <p className={`${styles.content} ${styles.label}`}>favorites</p>
            </div>
          </li>
          <li className={styles.menuList__wrapper}>
            <div className={styles.icon}>
              <Image src={homeIcon} alt="FunAcademy" width={30} height={30} />
            </div>
            <div className={styles.fadein}>
              <p className={`${styles.content} ${styles.label}`}>FunAcademy</p>
            </div>
          </li>
          <li className={styles.menuList__wrapper}>
            <div className={styles.icon}>
              <Image src={homeIcon} alt="deposit" width={30} height={30} />
            </div>
            <div className={styles.fadein}>
              <p className={`${styles.content} ${styles.label}`}>deposit</p>
            </div>
          </li>
          <li className={styles.menuList__wrapper}>
            <div className={styles.icon}>
              <Image src={homeIcon} alt="settings" width={30} height={30} />
            </div>
            <div className={styles.fadein}>
              <p className={`${styles.content} ${styles.label}`}>settings</p>
            </div>
          </li>
          <li className={styles.menuList__wrapper}>
            <div className={styles.icon}>
              <Image src={homeIcon} alt="customer service" width={30} height={30} />
            </div>
            <div className={styles.fadein}>
              <p className={`${styles.content} ${styles.label}`}>customer service</p>
            </div>
          </li>
          <li className={styles.menuList__wrapper}>
            <div className={styles.icon}>
              <Image src={homeIcon} alt="logout" width={30} height={30} />
            </div>
            <div className={styles.fadein}>
              <p className={`${styles.content} ${styles.label}`}>logout</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
