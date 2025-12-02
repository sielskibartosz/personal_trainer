import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Exercises from "./pages/Exercises";
import ExerciseCategory from "./pages/ExerciseCategory";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import { LanguageProvider } from "./i18n/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <Navbar />

      <Routes>
        {/* Strona główna */}
        <Route
          index
          element={
            <>
              <About />
              <Exercises />
              <Pricing />
              <Contact />
            </>
          }
        />

        {/* Podstrony ćwiczeń */}
        <Route path="exercises/:category" element={<ExerciseCategory />} />
      </Routes>
    </LanguageProvider>
  );
}

export default App;
