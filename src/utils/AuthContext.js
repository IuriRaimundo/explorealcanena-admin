import React, { useState, useContext, createContext } from 'react';

const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);

export function AuthContextProvider({ children }) {
  // Buscar token no armazenamento do browser
  const [token, setToken] = useState(localStorage.getItem('token'));

  const value = {
    token,
    setToken,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
