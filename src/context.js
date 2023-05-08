import React, { createContext, useState } from "react";

// create the context
export const AppContext = createContext();

// create the context provider
export const AppContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [balance, setBalance] = useState(0);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  const withdraw = (amount) => {
    setBalance((prevBalance) => prevBalance - amount);
  };

  const deposit = (amount) => {
    setBalance((prevBalance) => prevBalance + amount);
  };

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        balance,
        login,
        logout,
        withdraw,
        deposit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};


