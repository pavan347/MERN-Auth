import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : null
  );
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/get-all-users`, {
        headers: { token: token },
      });

      if (data.success) {
        toast.success(data.message);
        console.log(data.users);
        setUsers(data.users);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const value = {
    isLoggedIn,
    setIsLoggedIn,
    token,
    setToken,
    backendUrl,
    users,
  };

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
      getAllUsers();
    }
  }, [token]);

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
