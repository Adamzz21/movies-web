import { Button, Text } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import JokeCard from "./JokeCard";
import axios from "axios";

export default function SingleJoke() {
  const { id } = useParams();
  const [joke, setJoke] = useState({});

  const navigate = useNavigate();

  const fetchJoke = async () => {
    try {
      const res = await axios.get("http://localhost:8000/jokes/" + id);
      setJoke(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  const handleDeleteJoke = async (id) => {
    await axios.delete("http://localhost:8000/jokes/" + id);
    navigate("/jokes");
  };

  return (
    <>
      <Link to={"/jokes"}>
        <Button>go to jokes</Button>
      </Link>
      <Text>
        joke: <b>{id}</b>
        <JokeCard joke={joke} handleDeleteJoke={handleDeleteJoke} />
      </Text>
    </>
  );
}
