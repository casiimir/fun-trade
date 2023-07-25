import styles from "./Menu.module.scss";
import closeBtn from "../../assets/iconsProject/Eye-Off.svg";
import { menuList } from "@/mock/menuList";

const Menu = ({ setIsVisible }) => {
  const onHandleClick = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <section className={styles.Menu}>
      <input
        type="button"
        onClick={onHandleClick}
        value="X"
        className={styles.closeBtn}
      />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.image}>image</div>
          <div className={styles.text}>
            <p className={styles.text__name}>Nome</p>
            <p className={styles.text__accountType}>Lorem ipsum dolor sit.</p>
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
