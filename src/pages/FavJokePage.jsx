import { Button, Grid, Image } from "@mantine/core";
import React, { useContext } from "react";
import JokeCard from "../components/JokeCard";
import { JokeContext } from "../context/JokeProvider";
import { Link } from "react-router-dom";

export default function FavJokePage({ handleDeleteJoke }) {
  const { favJoke } = useContext(JokeContext);
  return (
    <>
      <Link to={"/"}>
        <Button m={20}>go to Homepage</Button>
      </Link>
      <Link to={"/jokes"}>
        <Button m={20}>go to jokes page</Button>
      </Link>
      {!!favJoke.length  ? (
        <Grid>
          {favJoke.map((joke) => (
            <Grid.Col span="3" key={joke?.id}>
              <JokeCard joke={joke} handleDeleteJoke={handleDeleteJoke} />
            </Grid.Col>
          ))}
        </Grid>
      ) : (
        <Image src="images/f4d.jpg" w={800} />
      )}
    </>
  );
}
