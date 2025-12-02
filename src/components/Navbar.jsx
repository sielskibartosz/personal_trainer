import React, { useState } from "react";
import { useTranslation } from "../i18n/LanguageContext";
import "./Navbar.css";

export default function Navbar() {
  const { t, lang, setLang } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">{t("navbar.title")}</div>

      <ul className="nav-links">
        {/* Linki do sekcji na stronie głównej */}
        <li>
          <a href="#about">{t("navbar.about")}</a>
        </li>
        <li>
          <a href="#exercises">{t("navbar.exercises")}</a>
        </li>
        <li>
          <a href="#pricing">{t("navbar.pricing")}</a>
        </li>
        <li>
          <a href="#contact">{t("navbar.contact")}</a>
        </li>

        {/* Dropdown językowy */}
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
