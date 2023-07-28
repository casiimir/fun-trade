import React, { useState } from "react";
import "@/styles/globals.scss";
export const UserContext = React.createContext();

export default function App({ Component, pageProps }) {
  const [userData, setUserData] = useState({});
  const [selectedPage, setSelectedPage] = useState("homepage");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        selectedPage,
        setSelectedPage,
        isSearchOpen,
        setIsSearchOpen,
      }}
    >
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}
