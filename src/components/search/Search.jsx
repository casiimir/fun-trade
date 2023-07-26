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
  };

  return (
    <section className={styles.Search}>
      <button onClick={onHandleClick} className={styles.closeBtn}>
        <Image src={closeIcon} alt="close" width={40} height={40} />
      </button>

      <form className={styles.form} onSubmit={onHandleSubmit}>
        <div>
          <input
            type="text"
            name="search"
            value={inputText}
            onChange={onHandleChange}
            placeholder="Cerca una crypto"
            required
            className={styles.input}
          />
        </div>
        <div>
          <input type="submit" name="submit" value="Cerca" className={styles.submitBtn} />
        </div>
      </form>
    </section>
  );
};

export default Search;
