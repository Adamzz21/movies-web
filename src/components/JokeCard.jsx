import { Button, Card, Text } from "@mantine/core";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { JokeContext } from "../context/JokeProvider";

export default function JokeCard({ joke, handleDeleteJoke }) {
  const { handleRemoveFavJoke, handleAddFavJoke, favJoke } =
    useContext(JokeContext);
  console.log(favJoke);
  const isExist = favJoke.some((prevFaveJoke) => prevFaveJoke.id === joke.id);
  return (
    <Card
      shadow="sm"
      padding="xl"
      component="a"
      w={"300px"}
      style={{ cursor: "pointer" }}
      key={joke.id}
    >
      <Link to={"/jokes/" + joke.id} style={{ all: "unset" }}>
        <Text fw={500} size="lg" mt="md">
          {joke?.joke}
        </Text>
        <Text fw={500} size="lg" mt="md">
          {joke?.setup}
        </Text>

        <Text mt="xs" c="dimmed" size="sm">
          {joke?.delivery}
        </Text>
      </Link>
      <Button variant="light" onClick={() => handleDeleteJoke(joke.id)} mb={6}>
        x
      </Button>

      <Button
        color={!isExist ? null : "red"}
        variant="light"
        onClick={() => {
          !isExist ? handleAddFavJoke(joke) : handleRemoveFavJoke(joke);
        }}
      >
        {!isExist ? "Add to favorite" : "Remove Favorite"}
      </Button>
    </Card>
  );
}
