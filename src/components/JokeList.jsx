import { Box, Button, Grid, GridCol, Input, TextInput } from "@mantine/core";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import JokeCard from "./JokeCard";
import { Link } from "react-router-dom";
import { JokeContext } from "../context/JokeProvider";

export default function JokeList() {
  const [jokes, setJokes] = useState([]);
  const [value, setValue] = useState("");
  const fetchJokes = async () => {
    const res = await axios.get("http://localhost:5000/jokes");
    setJokes(res.data);
  };

  useEffect(() => {
    fetchJokes();
  }, []);
  const handleDeleteJoke = async (id) => {
    await axios.delete("http://localhost:5000/jokes/" + id);
    fetchJokes();
  };

  const { user, logout } = useContext(JokeContext);

  return (
    <div>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 10
        }}
      >
        <div>
          {" "}
          <Link to={"/"}>
            <Button m={20}>go to HomePage</Button>
          </Link>
          <Link to={"/favJoke"}>
            <Button m={20}>go to favorite</Button>
          </Link>
        </div>
        {user ? (
          <Button onClick={() => logout()}>Logout</Button>
        ) : (
          <Link to={"/login"}>
            <Button>Login</Button>
          </Link>
        )}
      </Box>
      <TextInput
        placeholder="type to search for a joke"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        h={50}
        radius={35}
      />
      <Grid>
        {jokes
          .filter((joke) => {
            return (
              joke.setup?.includes(value) ||
              joke.joke?.includes(value) ||
              joke.delivery?.includes(value)
            );
          })
          .map((joke) => (
            <Grid.Col span="3" key={joke?.id}>
              <JokeCard
                joke={joke}
                handleDeleteJoke={handleDeleteJoke}
                disableDeletion={!user?.isAdmin}
              />
            </Grid.Col>
          ))}
      </Grid>
    </div>
  );
}
