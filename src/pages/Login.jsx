import { useForm } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Divider,
  Stack,
} from "@mantine/core";
import { useContext } from "react";
import { JokeContext } from "../context/JokeProvider";

export function AuthenticationForm(props) {
  const form = useForm({
    initialValues: {
      name: "",
      password: "",
    },

    validate: {
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  const { login } = useContext(JokeContext);

  return (
    <Paper radius="md" p="xl" w={600} withBorder {...props}>
      <Text size="lg" fw={500}>
        Welcome to Jokes Store
      </Text>

      <form
        onSubmit={form.onSubmit((e) =>
          login({ password: e.password, username: e.name })
        )}
      >
        <Stack>
          <TextInput
            label="Name"
            placeholder="Your name"
            value={form.values.name}
            onChange={(event) =>
              form.setFieldValue("name", event.currentTarget.value)
            }
            radius="md"
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) =>
              form.setFieldValue("password", event.currentTarget.value)
            }
            error={
              form.errors.password &&
              "Password should include at least 6 characters"
            }
            radius="md"
          />
        </Stack>

        <Group justify="space-between" mt="xl">
          <Button type="submit" radius="xl">
            Login
          </Button>
        </Group>
      </form>
    </Paper>
  );
}
