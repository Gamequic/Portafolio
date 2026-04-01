/**
 * App.jsx — Root React component.
 * Sets up the router and renders the main page.
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* Add additional routes here as needed */}
      </Routes>
    </BrowserRouter>
  );
}
