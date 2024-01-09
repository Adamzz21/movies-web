import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import HomePage from "./pages/HomePage";
import JokeProvider from "./context/JokeProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MantineProvider>
    <JokeProvider>
      <App />
    </JokeProvider>
  </MantineProvider>
);
