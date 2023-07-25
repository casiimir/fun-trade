import React, { useState } from "react";
import DefaultLayout from "@/layouts/DefaultLayout";
import "@/styles/globals.scss";
export const UserContext = React.createContext();

export default function App({ Component, pageProps }) {
  const [nav, setNav] = useState(true);
  // console.log(username);

  return (
    <UserContext.Provider value={{ nav, setNav }}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </UserContext.Provider>
  );
}
