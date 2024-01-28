"use client";

import { createContext, useState } from "react";

export const Context = createContext();

export default function HeroProvider({ children }) {
  const [readMore, setReadMore] = useState({ show: false });
  const [readMore1, setReadMore1] = useState(false);

  const readMoreToggler = (id) =>
    setReadMore((state) => ({
      ...state,
      show: true,
      [id]: !state[id], //toggles boolean value
    }));

  return (
    <Context.Provider
      value={{
        readMore,
        setReadMore: readMoreToggler,
        readMore1,
        setReadMore1,
      }}
    >
      {children}
    </Context.Provider>
  );
}
