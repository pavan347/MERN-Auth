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
  const [logHistory, setLogHistory] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const getAllUsers = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/get-all-users`, {
        headers: { token: token },
      });

      if (data.success) {
        toast.success(data.message);
        setUsers(data.users);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const getLogHistory = async () => {
    try {
        console.log("selectedUser: " + selectedUser);
    const { data } = await axios.get(
      `${backendUrl}/api/auth/get-user-login-logs/${selectedUser.email}`,
      {
        headers: { token: token }
      }
    );

    console.log(data);

      if (data.success) {
        toast.success(data.message);
        setLogHistory(data.loginLogs);
        console.log(data.loginLogs);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
}

  const value = {
    isLoggedIn,
    setIsLoggedIn,
    token,
    setToken,
    backendUrl,
    users,
    setUsers,
    selectedUser,
    setSelectedUser,
    logHistory,
    setLogHistory,
    getAllUsers,
  };

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
      getAllUsers();
    }
  }, [token]);

  useEffect(() => {
    if (selectedUser) {
      getLogHistory();
    }
  }, [selectedUser]);

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
