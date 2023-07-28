import { useEffect, useState } from "react";
import styles from "./index.module.scss";

const HistoryTransactions = () => {
  /*   const [hTrans, sethTrans] = useState(null);

  useEffect(() => {
    const getUserData = () => {
      const userDataString = localStorage.getItem("xxx");
      if (userDataString) {
        const userDataObject = JSON.parse(userDataString);
        sethTrans(userDataObject.htrans);
      }
    };

    getUserData();
  }, []); */

  return (
    <div className={styles.HistoryTransactions}>
      <h2>History transactions</h2>
      <div className={styles.__assets}>
        <div className={styles.__singleAsset}>
          <div className={styles.__details}>
            <div className={styles.__left}>
              <h3>Buy Bitcoin</h3>
            </div>
            <div className={styles.__right}>
              <span>50$</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryTransactions;
