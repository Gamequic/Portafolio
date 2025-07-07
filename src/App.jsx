import { Routes, Route } from 'react-router-dom';

import ReactGA from "react-ga4";

ReactGA.initialize("G-M31EY2XW4J");
ReactGA.send("pageview");

// Pages
import MainPage from "./Pages/MainPage";

import "./App.css";
import Subrogates from './Pages/Subrogates';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/Subrogates" element={<Subrogates />} />
    </Routes>
  );
}

export default App;
