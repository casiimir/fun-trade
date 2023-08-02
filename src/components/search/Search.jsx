import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./Search.module.scss";
import closeIcon from "../../assets/iconsProject/close-menu.svg";
import { UserContext } from "@/pages/_app";
import cryptoList from "@/mock/cryptoCardMock";
import searchIcon from "../../assets/iconsProject/search.svg";

const Search = ({ setIsModalOpen }) => {
  const { isSearchOpen, setIsSearchOpen } = useContext(UserContext);
  const [inputText, setInputText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const router = useRouter();

  const onHandleClickClose = () => {
    setIsSearchOpen(false);
    setIsModalOpen((prev) => !prev);
    setInputText("");
    setSearchResults([]);
  };
  const onHandleFocus = () => {
    setIsSearchOpen((prev) => !prev);
  };
  const onHandleChange = (e) => {
    setInputText(e.target.value);
  };
  const onHandleClickCrypto = (id) => {
    setIsSearchOpen(false);
    router.push(`/cryptovalutes/${id}`);
  };

  useEffect(() => {
    setInputText("");
    setSearchResults([]);
  }, [isSearchOpen]);

  useEffect(() => {
    if (inputText && inputText != " ")
      setSearchResults(
        cryptoList.filter((crypto) =>
          crypto.name.toLowerCase().includes(inputText.toLowerCase())
        )
      );
    else setSearchResults([]);
  }, [inputText]);

  return (
    <>
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
            onFocusCapture={onHandleFocus}
            placeholder="Cerca una crypto"
            required
            className={styles.input}
          />
          <div className={styles.searchIcon}>
            <Image src={searchIcon} alt="search" width={30} height={30} />
          </div>
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
    </>
  );
};

export default Search;
