import { createContext, useState, useEffect } from "react";

export const Context = createContext();

export const Provider = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  return (
    <Context.Provider
      value={{
        openSidebar: [openSidebar, setOpenSidebar],
        searchResult: [searchResult, setSearchResult],
      }}
    >
      {children}
    </Context.Provider>
  );
};
