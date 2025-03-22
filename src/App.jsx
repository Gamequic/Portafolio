import { Routes, Route } from 'react-router-dom';

// import ReactGA from "react-ga4";

// ReactGA.initialize("G-QG8Q65P4T6");
// ReactGA.send("pageview");

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
