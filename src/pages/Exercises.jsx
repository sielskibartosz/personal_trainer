import Section from "../components/Section";
import { useTranslation } from "../i18n/LanguageContext";
import { useNavigate } from "react-router-dom";
import "./Exercises.css";

export default function Exercises() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Lista kategorii ćwiczeń
  const exerciseImages = [
    { src: `${import.meta.env.BASE_URL}images/ex1.jpg`, label: t("exercises.stretching"), key: "stretching" },
    { src: `${import.meta.env.BASE_URL}images/ex2.jpg`, label: t("exercises.strength"), key: "strength" },
    {src: `${import.meta.env.BASE_URL}images/ex3.jpg`, label: t("exercises.core"), key: "core" },
    {src: `${import.meta.env.BASE_URL}images/ex4.jpg`, label: t("exercises.cardio"), key: "cardio" },
  ];

  // Funkcja przejścia do podstrony kategorii
  const goToCategory = (key) => {
    navigate(`/exercises/${key}`);
  };

  return (
    <Section id="exercises" title={t("exercises.title")} className="exercises-section">
      <p>{t("exercises.text")}</p>

      <div className="exercise-grid">
        {exerciseImages.map((ex) => (
          <div
            className="exercise-card"
            key={ex.key}
            onClick={() => goToCategory(ex.key)}
          >
            <img src={ex.src} alt={ex.label} className="exercise-image" />
            <p className="exercise-label">{ex.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
