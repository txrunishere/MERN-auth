import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";

const UserContext = createContext({});

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      await axios.get("/get-user").then((res) => setUser(res.data));
    }
    if (!user) {
      fetchUser();
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserData() {
  return useContext(UserContext);
}
