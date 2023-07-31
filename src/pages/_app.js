import React, { useState } from "react";
import "@/styles/globals.scss";
export const UserContext = React.createContext();

export default function App({ Component, pageProps }) {
  const [selectedPage, setSelectedPage] = useState("homepage");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <UserContext.Provider
      value={{
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
