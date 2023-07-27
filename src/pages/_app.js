import React, { useState } from "react";
import "@/styles/globals.scss";
export const UserContext = React.createContext();

export default function App({ Component, pageProps }) {
  const [nav, setNav] = useState(false);

  return (
    <UserContext.Provider value={{ nav, setNav }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}
