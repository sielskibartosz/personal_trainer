import React, { useState } from "react";
import { useTranslation } from "../i18n/LanguageContext";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const { t, lang, setLang } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // mobilne menu

  const navigate = useNavigate();
  const location = useLocation();

  // Funkcja scroll do sekcji z offsetem dla sticky navbaru
  const handleScrollTo = (id) => {
    const scroll = () => {
      const section = document.getElementById(id);
      if (section) {
        const yOffset = -60; // wysokość navbaru
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };

    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => scroll(), 100);
    } else {
      scroll();
    }

    setMenuOpen(false); // zamyka menu mobilne po kliknięciu
  };

  // Kliknięcie w logo – przewija na samą górę
  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMenuOpen(false); // zamyka menu mobilne
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={handleLogoClick} style={{ cursor: "pointer" }}>
        {t("navbar.title")}
      </div>

      {/* Hamburger dla mobile */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
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

        {/* Dropdown językowy */}
        <li className="lang-dropdown">
          <button onClick={() => setLangOpen(!langOpen)}>
            {lang.toUpperCase()} ▼
          </button>
          {langOpen && (
            <ul className="dropdown">
              <li
                onClick={() => {
                  setLang("pl");
                  setLangOpen(false);
                  setMenuOpen(false);
                }}
              >
                PL
              </li>
              <li
                onClick={() => {
                  setLang("en");
                  setLangOpen(false);
                  setMenuOpen(false);
                }}
              >
                EN
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}
