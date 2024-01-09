import { Button, Grid, GridCol, Input, TextInput } from "@mantine/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import JokeCard from "./JokeCard";
import { Link } from "react-router-dom";

export default function JokeList() {
  const [jokes, setJokes] = useState([]);
  const [value, setValue] = useState("");
  const fetchJokes = async () => {
    const res = await axios.get("http://localhost:8000/jokes");
    setJokes(res.data);
  };

  useEffect(() => {
    fetchJokes();
  }, []);
  const handleDeleteJoke = async (id) => {
    await axios.delete("http://localhost:8000/jokes/" + id);
    fetchJokes();
  };

  return (
    <div>
      <div>
        <Link to={"/"}>
          <Button m={20}>go to HomePage</Button>
        </Link>
        <Link to={"/favJoke"}>
          <Button m={20}>go to favorite</Button>
        </Link>
      </div>
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
              <JokeCard joke={joke} handleDeleteJoke={handleDeleteJoke} />
            </Grid.Col>
          ))}
      </Grid>
    </div>
  );
}
