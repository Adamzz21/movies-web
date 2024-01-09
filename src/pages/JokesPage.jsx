import { Input, Text } from "@mantine/core";
import React from "react";
import JokeList from "../components/JokeList";

export default function JokesPage() {
  return (
    <>
      <Text>Jokes list</Text>
      <Input>Type to search for a </Input>
      <JokeList />
    </>
  );
}
