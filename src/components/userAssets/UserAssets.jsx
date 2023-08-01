import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import Card from "../card";
//mock
import crypto from "../../mock/peppe.js";

const UserAssets = () => {
  const [userData, setuserData] = useState({});

  useEffect(() => {
    const userDataString = JSON.parse(localStorage.getItem("UserData"));
    setuserData(userDataString);
  }, []);
  console.log(userData);
  return (
    <div className={styles.UserAssets}>
      <h2> Favorite assets</h2>
      <div className={styles.__assets}>
        <div className={styles.__favoriteAsset}>
          {crypto.map((item) => (
            <Card key={item.id || index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserAssets;
