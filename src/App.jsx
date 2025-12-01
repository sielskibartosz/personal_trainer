import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={
            <>
              <About />
              <Exercises />
              <Pricing />
              <Contact />
            </>
          } />

          {/* Podstrony z ćwiczeniami */}
          <Route path="/exercises/:category" element={<ExerciseCategory />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
