import React, { useState } from "react";
import "@/styles/globals.scss";
export const UserContext = React.createContext();

export default function App({ Component, pageProps }) {
  const [userData, setUserData] = useState({});

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}
