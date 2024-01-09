import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const JokeContext = createContext();

export default function JokeProvider({ children }) {
  const [favJoke, setFavJoke] = useState([]);

  const handleAddFavJoke = (joke) => {
    const isExist = favJoke.some((prevFaveJoke) => prevFaveJoke.id === joke.id);
    if (isExist) return;
    setFavJoke((prev) => [...prev, joke]);
  };
  const handleRemoveFavJoke = (joke) => {
    const newFavJokes = favJoke.filter(
      (prevFavJoke) => prevFavJoke.id !== joke.id
    );

    setFavJoke(newFavJokes);
  };

  useEffect(() => {
    localStorage.setItem("favorite-jokes", favJoke);
  }, [favJoke]);

  const [user, setUser] = useState(
    localStorage.getItem("username")
      ? JSON.parse(localStorage.getItem("username"))
      : null
  );

  const login = async ({ username, password }) => {
    try {
      const response = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });
      const user = response.data;
      user.isAdmin = user.role === "admin";
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
    } catch (error) {
      console.error("Failed to login", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <JokeContext.Provider
      value={{
        favJoke,
        handleAddFavJoke,
        handleRemoveFavJoke,
        user,
        login,
        logout,
      }}
    >
      {children}
    </JokeContext.Provider>
  );
}
