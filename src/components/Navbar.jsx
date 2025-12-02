import React, { useState } from "react";
import { useTranslation } from "../i18n/LanguageContext";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const { t, lang, setLang } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollTo = (id) => {
    // Jeśli nie jesteśmy na stronie głównej, najpierw przejdź
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      // Poczekaj, aż DOM się załaduje
      setTimeout(() => scrollToSection(id), 100);
    } else {
      scrollToSection(id);
    }
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">{t("navbar.title")}</div>

      <ul className="nav-links">
        <li>
          <button onClick={() => handleScrollTo("about")}>
            {t("navbar.about")}
          </button>
        </li>
        <li>
          <button onClick={() => handleScrollTo("exercises")}>
            {t("navbar.exercises")}
          </button>
        </li>
        <li>
          <button onClick={() => handleScrollTo("pricing")}>
            {t("navbar.pricing")}
          </button>
        </li>
        <li>
          <button onClick={() => handleScrollTo("contact")}>
            {t("navbar.contact")}
          </button>
        </li>

        <li className="lang-dropdown">
          <button onClick={() => setLangOpen(!langOpen)}>
            {lang.toUpperCase()} ▼
          </button>
          {langOpen && (
            <ul className="dropdown">
              <li onClick={() => { setLang("pl"); setLangOpen(false); }}>PL</li>
              <li onClick={() => { setLang("en"); setLangOpen(false); }}>EN</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}
