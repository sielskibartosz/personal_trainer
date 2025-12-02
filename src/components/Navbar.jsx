import React, { useState } from "react";
import { useTranslation } from "../i18n/LanguageContext";
import "./Navbar.css";

export default function Navbar() {
  const { t, lang, setLang } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // mobilne menu

  return (
    <nav className="navbar">
      <div className="logo">{t("navbar.title")}</div>

      {/* Hamburger dla mobile */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <a href="#about" onClick={() => setMenuOpen(false)}>{t("navbar.about")}</a>
        </li>
        <li>
          <a href="#exercises" onClick={() => setMenuOpen(false)}>{t("navbar.exercises")}</a>
        </li>
        <li>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>{t("navbar.pricing")}</a>
        </li>
        <li>
          <a href="#contact" onClick={() => setMenuOpen(false)}>{t("navbar.contact")}</a>
        </li>

        {/* Dropdown językowy */}
        <li className="lang-dropdown">
          <button onClick={() => setLangOpen(!langOpen)}>
            {lang.toUpperCase()} ▼
          </button>
          {langOpen && (
            <ul className="dropdown">
              <li onClick={() => { setLang("pl"); setLangOpen(false); setMenuOpen(false); }}>PL</li>
              <li onClick={() => { setLang("en"); setLangOpen(false); setMenuOpen(false); }}>EN</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}
