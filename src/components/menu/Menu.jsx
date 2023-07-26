import Image from "next/image";
import styles from "./Menu.module.scss";
import closeBtn from "../../assets/iconsProject/Eye-Off.svg";
import { menuList } from "@/mock/menuList";
import closeIcon from "../../assets/iconsProject/close-menu.svg";
import profileIcon from "../../mock/profile-icon.svg";

const Menu = ({ setIsBurgerOpen }) => {
  const onHandleClick = () => setIsBurgerOpen((prev) => !prev);
  return (
    <section className={styles.Menu}>
      <button onClick={onHandleClick} className={styles.closeBtn}>
        <Image src={closeIcon} alt="close" width={40} height={40} />
      </button>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.image}>
            <Image src={profileIcon} alt="profile" width={50} height={50} />
          </div>
          <div className={styles.text}>
            <p className={styles.text__name}>Totò Termini</p>
            <p className={styles.text__accountType}>Premium account</p>
          </div>
        </div>
        <ul className={styles.menuList}>
          {menuList.map((item) => (
            <li className={styles.menuList__content} key={item.id}>
              {item.content}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Menu;
