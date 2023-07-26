import Image from "next/image";
import styles from "./Search.module.scss";
import closeIcon from "../../assets/iconsProject/close-menu.svg";
import { useState } from "react";
import searchIcon from "../../assets/iconsProject/search.svg";

const Search = ({ setIsSearchOpen }) => {
  const [inputText, setInputText] = useState("");

  const onHandleClick = () => setIsSearchOpen((prev) => !prev);
  const onHandleChange = (e) => setInputText(e.target.value);
  const onHandleSubmit = (e) => {
    e.preventDefault();
    setInputText("");
  };

  return (
    <section className={styles.Search}>
      <form className={styles.form} onSubmit={onHandleSubmit}>
        <button onClick={onHandleClick} className={styles.closeBtn}>
          <Image src={closeIcon} alt="close" width={40} height={40} />
        </button>
        <button type="submit" name="submit" className={styles.submitBtn}>
          <Image
            src={searchIcon}
            alt="search"
            width={30}
            height={30}
            className={styles.icon}
          />
        </button>
        <input
          type="text"
          name="search"
          value={inputText}
          onChange={onHandleChange}
          placeholder="Cerca una crypto"
          required
          className={styles.input}
        />
      </form>
    </section>
  );
};

export default Search;
