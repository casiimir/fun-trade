import { useEffect, useState } from "react";
import styles from "./index.module.scss";

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
          <ul>
            {userData.preference?.map((item, index) => (
              <li key={index}>{item} ❤️</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserAssets;
