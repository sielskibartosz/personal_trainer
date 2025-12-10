import Section from "../components/Section";
import { useTranslation } from "../i18n/LanguageContext";
import "./About.css";

export default function About() {
  const { t } = useTranslation();

  return (
    <Section id="about" title={t("about.title")} className="about-section">
      <div className="about-container">

        {/* LEWA STRONA – TEKST */}
        <div className="about-left">
          <h3 className="about-hook">
            {t("about.hook")}
          </h3>

          <div className="about-text">
            {t("about.text").split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* LISTA WYRÓŻNIKÓW */}
          <ul className="about-list">
            <li>{t("about.highlight_1")}</li>
            <li>{t("about.highlight_2")}</li>
            <li>{t("about.highlight_3")}</li>
          </ul>
        </div>

        {/* PRAWA STRONA – ZDJĘCIE */}
        <div className="about-right">
          <img
             src={`${import.meta.env.BASE_URL}images/trainer.jpeg`}  // poprawnie odwołanie do folderu public
            alt="Trener personalny"
            className="about-photo"
          />
        </div>

      </div>
    </Section>
  );
}
