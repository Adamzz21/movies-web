import { Button, Center } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <Center h={"100vh"}>
      <Link to={"/jokes"}>
        <Button size="md" variant="light" m={20}>
          Go to joke
        </Button>
      </Link>
      <Link to={"/create-joke"}>
        <Button size="md" variant="light" m={20}>
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
