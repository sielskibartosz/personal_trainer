import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { LanguageProvider } from "./i18n/LanguageContext";
import { Suspense, lazy } from "react";

// Lazy loading podstron
const About = lazy(() => import("./pages/About"));
const Exercises = lazy(() => import("./pages/Exercises"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Contact = lazy(() => import("./pages/Contact"));
const ExerciseCategory = lazy(() => import("./pages/ExerciseCategory"));

function App() {
  return (
    <LanguageProvider>
      <Navbar />

      {/* Suspense pokazuje fallback podczas ładowania */}
      <Suspense fallback={<div style={{ textAlign: "center", marginTop: "100px", color: "#fff" }}>Ładowanie...</div>}>
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
      </Suspense>
    </LanguageProvider>
  );
}

export default App;
