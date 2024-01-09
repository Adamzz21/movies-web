import "./App.css";
import CreatjokeForm from "./components/CreatjokeForm";
import JokeList from "./components/JokeList";
import FavJokePage from "./pages/FavJokePage";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthenticationForm } from "./pages/Login";
import { Center } from "@mantine/core";
import { useContext } from "react";
import { JokeContext } from "./context/JokeProvider";

function App() {
  const { user } = useContext(JokeContext)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-joke" element={user?.isAdmin ? <CreatjokeForm /> : <Navigate to={'/jokes'} />} />
        <Route path="/jokes" element={<JokeList />} />
        <Route path="/login" element={!user ? <Center h={'60vh'}>
          <AuthenticationForm />
        </Center> : <Navigate to={'/jokes'} />

        } />
        <Route path="/favJoke" element={<FavJokePage />} />
      </Routes>
    </Router>
  );
}

export default App;
