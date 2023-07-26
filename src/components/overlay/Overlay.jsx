import styles from "./Overlay.module.scss";

const Overlay = ({ setIsOpen }) => {
  const onHandleClick = () => setIsOpen((prev) => !prev);

  return <div className={styles.overlay} onClick={onHandleClick} />;
};

export default Overlay;
