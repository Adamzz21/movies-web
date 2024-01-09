import "./App.css";
import CreatjokeForm from "./components/CreatjokeForm";
import JokeList from "./components/JokeList";
import SingleJoke from "./components/SingleJoke";
import FavJokePage from "./pages/FavJokePage";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-joke" element={<CreatjokeForm/>}/>
        <Route path="/jokes" element={<JokeList/>} />
        <Route path="/jokes/:id" element={<SingleJoke/>} />
        <Route path="/favJoke" element={<FavJokePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
