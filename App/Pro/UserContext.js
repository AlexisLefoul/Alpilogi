import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);

  const setUser = (id) => {
    setUserId(id);
  };

  const logout = () => {
    setUserId(null);
  };

  return (
    <UserContext.Provider value={{ userId, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
