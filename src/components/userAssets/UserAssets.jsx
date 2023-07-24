import { useContext, useState } from "react";
import styles from "./index.module.scss";

const UserAssets = () => {
  return (
    <div className={styles.UserAssets}>
      <div className={styles.__assets}>
        <div className={styles.__singleAsset}>
          <div className={styles.__details}>
            <div className={styles.__left}>
              <h3>Amazon</h3>
              <image></image>
            </div>
            <div className={styles.__right}>
              <span>grafico</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAssets;
