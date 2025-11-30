import Navbar from "./components/Navbar";
import About from "./pages/About";
import Exercises from "./pages/Exercises";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import { LanguageProvider } from "./i18n/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <About />
      <Exercises />
      <Pricing />
      <Contact />
    </LanguageProvider>
  );
}

export default App;
