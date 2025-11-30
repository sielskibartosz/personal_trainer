import Section from "../components/Section";
import { useTranslation } from "../i18n/LanguageContext";
import "./About.css";

export default function About() {
  const { t } = useTranslation();

  return (
    <Section id="about" title={t("about.title")} className="about-section">
      <div className="about-overlay"></div>
      <div className="about-text">
        {t("about.text").split("\n\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
