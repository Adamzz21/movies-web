import { Button, Center } from "@mantine/core";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { JokeContext } from "../context/JokeProvider";

export default function HomePage() {
  const { user } = useContext(JokeContext);

  return (
    <Center h={"100vh"}>
      <Link to={"/jokes"}>
        <Button size="md" variant="light" m={20}>
          Go to joke
        </Button>
      </Link>
      <Link to={"/create-joke"}>
        <Button size="md" variant="light" m={20} disabled={!user?.isAdmin}>
          Go to create joke
        </Button>
      </Link>
      <Link to={"/favJoke"}>
        <Button size="md" variant="light" m={20}>
          Go to favorite jokes
        </Button>
      </Link>
    </Center>
  );
}
