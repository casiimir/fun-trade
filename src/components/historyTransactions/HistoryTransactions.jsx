import { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "@/pages/_app";
import styles from "./index.module.scss";

const HistoryTransactions = () => {
  const { userData } = useContext(UserContext);
  console.log(userData);

  return (
    <>
      <div className={styles.HistoryTransactions}>
        <h2>History transactions</h2>
        <div className={styles.__assets}>
          <div className={styles.__singleAsset}>
            <div className={styles.__details}>
              <div className={styles.__left}>
                <ul>
                  {userData.transition.map((item, index) => (
                    <li key={index}>{`${item.name}: ${item.budget}$`}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HistoryTransactions;
