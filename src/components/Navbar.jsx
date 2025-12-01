import React, { useState } from "react";
import { useTranslation } from "../i18n/LanguageContext";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const { t, lang, setLang } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);
  const navigate = useNavigate();

  const handleScrollTo = (id) => {
    // Najpierw wracamy na stronę główną
    navigate("/");

    // Mały timeout, żeby element był w DOM
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
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
