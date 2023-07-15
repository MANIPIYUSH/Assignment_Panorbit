

import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const userContext = createContext();

const UserProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const getData = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get('https://panorbit.in/api/users.json');
      const userData = res.data.users;
      setIsLoading(false);
      setUsers(userData);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const dataArr = JSON.parse(localStorage.getItem("userData"));

  return (
    <userContext.Provider value={{ users, getData, dataArr, isLoading }}>
      {children}
    </userContext.Provider>
  );
}

export default UserProvider;
