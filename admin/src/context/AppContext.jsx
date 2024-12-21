import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ( props ) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : null);

    const value = {
        isLoggedIn,
        setIsLoggedIn,
        token,
        setToken,
        backendUrl
    }
  
  return (
    <AppContext.Provider
      value={value}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;