/*
 * App.jsx — Root component.
 * Wraps the whole app in LanguageProvider so every component
 * can access { lang, setLang } via useLanguage().
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import MainPage from "./Pages/MainPage";

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
