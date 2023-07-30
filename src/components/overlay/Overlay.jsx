import { useContext } from "react";
import { UserContext } from "@/pages/_app";
import styles from "./Overlay.module.scss";

const Overlay = ({ props }) => {
  const { isSearchOpen, setIsSearchOpen } = useContext(UserContext);
  const { isModalOpen, isBurgerOpen } = props || {};
  const { setIsModalOpen, setIsBurgerOpen } = props || {};

  const onHandleClick = () => {
    if (isBurgerOpen) setIsBurgerOpen(false);
    if (isModalOpen) setIsModalOpen(false);
    if (isSearchOpen) setIsSearchOpen(false);
  };

  return <div className={styles.overlay} onClick={onHandleClick} />;
};

export default Overlay;
