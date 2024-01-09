import { Button, Center, CloseButton, Input, Stack } from "@mantine/core";
import { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { JokeContext } from "../context/JokeProvider";

function CreatjokeForm() {
  const [jokeText, setJokeText] = useState("");
  const [isSubmiting, setIsSubmiting] = useState(false);

  let navigate = useNavigate();

  const { user } = useContext(JokeContext);

  const handleSubmitJoke = async () => {
    const pyload = {
      joke: jokeText,
      type: "single",
    };
    setIsSubmiting(true);
    try {
      const data = await axios.post("http://localhost:5000/jokes", pyload, {
        headers: { Authorization: `Bearer ${user?.token}` },
      });
      navigate("/jokes");
      console.log(data.id);
    } catch (error) {
      console.log(error);
    }
    setIsSubmiting(false);
  };

  return (
    <Center>
      <Link to={"/"}>
        <Button mr={50}>go to HomePage</Button>
      </Link>
      <Stack w={500}>
        <Input.Wrapper label="joke Text">
          <Input
            placeholder="Clearable input"
            value={jokeText}
            onChange={(event) => setJokeText(event.currentTarget.value)}
            rightSectionPointerEvents="all"
            rightSection={
              <CloseButton
                aria-label="Clear input"
                onClick={() => setJokeText("")}
                styles={{ display: jokeText ? undefined : "none" }}
              />
            }
          />
        </Input.Wrapper>
        <Button
          variant="filled"
          color="red"
          onClick={handleSubmitJoke}
          loading={isSubmiting}
          disabled={!jokeText}
        >
          submit Joke
        </Button>
      </Stack>
    </Center>
  );
}

export default CreatjokeForm;
