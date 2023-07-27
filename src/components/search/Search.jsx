import Image from "next/image";
import styles from "./Search.module.scss";
import closeIcon from "../../assets/iconsProject/close-menu.svg";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import cryptoList from "@/mock/cryptoCardMock";

const Search = ({ props }) => {
  const { isSearchOpen, setIsSearchOpen } = props;
  const [inputText, setInputText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const router = useRouter();

  const onHandleClickClose = () => {
    setIsSearchOpen((prev) => !prev);
    setInputText("");
    setSearchResults([]);
  };
  const onHandleChange = (e) => setInputText(e.target.value);
  const onHandleClickCrypto = (id) => {
    // router.push(`/cryptovalutes/${id}`);
  };

  useEffect(() => {
    setInputText("");
    setSearchResults([]);
  }, [isSearchOpen]);

  useEffect(() => {
    if (inputText)
      setSearchResults(
        cryptoList.filter((crypto) => crypto.name.toLowerCase().includes(inputText))
      );
  }, [inputText]);

  return (
    <section className={styles.Search}>
      <div className={styles.container}>
        <button onClick={onHandleClickClose} className={styles.closeBtn}>
          <Image src={closeIcon} alt="close" width={40} height={40} />
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
      </div>
      {searchResults.length > 0 && (
        <div className={styles.searchResults}>
          {searchResults?.map((result) => (
            <div
              className={styles.card}
              key={result.id}
              onClick={() => onHandleClickCrypto(result.id)}
            >
              <div className={styles.image}>
                <img src={result?.image} alt={result?.name} />
              </div>
              <p className={styles.text}>{result?.name}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Search;
