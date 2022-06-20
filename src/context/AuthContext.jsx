import React, { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // code here
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};
