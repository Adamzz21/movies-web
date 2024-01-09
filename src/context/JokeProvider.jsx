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
  return (
    <JokeContext.Provider
      value={{ favJoke, handleAddFavJoke, handleRemoveFavJoke }}
    >
      {children}
    </JokeContext.Provider>
  );
}
