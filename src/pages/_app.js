import React, { useState } from "react";
import "@/styles/globals.scss";
export const UserContext = React.createContext();

export default function App({ Component, pageProps }) {
  const [userData, setUserData] = useState({});
  const [selectedPage, setSelectedPage] = useState("homepage");

  return (
    <UserContext.Provider
      value={{ userData, setUserData, selectedPage, setSelectedPage }}
    >
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}
