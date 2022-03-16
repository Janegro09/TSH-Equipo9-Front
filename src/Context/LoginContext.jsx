import React, { createContext, useState } from 'react';

export const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {

  const [isLogged, setIsLogged] = useState([false]);

  return(
    <LoginContext.Provider value={isLogged}>
      {children}
    </LoginContext.Provider>
  )
};

export default LoginContextProvider;