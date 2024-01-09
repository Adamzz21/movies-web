import { Button, Card, Text } from "@mantine/core";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { JokeContext } from "../context/JokeProvider";

export default function JokeCard({ joke, handleDeleteJoke, disableDeletion }) {
  const { handleRemoveFavJoke, handleAddFavJoke, favJoke } =
    useContext(JokeContext);
  console.log(favJoke);
  const isExist = favJoke.some((prevFaveJoke) => prevFaveJoke.id === joke.id);
  return (
    <Card shadow="sm" padding="xl" component="a" w={"300px"} key={joke.id}>
      <Text fw={500} size="lg" mt="md">
        {joke?.joke}
      </Text>
      <Text fw={500} size="lg" mt="md">
        {joke?.setup}
      </Text>

      <Text mt="xs" c="dimmed" size="sm">
        {joke?.delivery}
      </Text>
      <Button
        variant="light"
        onClick={() => handleDeleteJoke(joke.id)}
        mb={6}
        disabled={disableDeletion}
      >
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
