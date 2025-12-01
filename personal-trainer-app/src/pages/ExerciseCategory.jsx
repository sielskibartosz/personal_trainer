// ExerciseCategory.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "../i18n/LanguageContext";
import Section from "../components/Section";
import "./ExerciseCategory.css";

export default function ExerciseCategory() {
  const { category } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const categoryDescriptions = {
    stretching: t("categoryDescriptions.stretching"),
    strength: t("categoryDescriptions.strength"),
    core: t("categoryDescriptions.core"),
    cardio: t("categoryDescriptions.cardio"),
  };

  const description = categoryDescriptions[category] || t("categoryDescriptions.default");

  return (
    <Section
      id={`exercises-${category}`}
      title={t(`exercises.${category}`) || category}
      className="exercises-section"
    >
      {/* Przycisk powrotu */}
      <div className="back-button">
        <button onClick={() => navigate("/")}>
          ⬅️ {t("back")}
        </button>
      </div>

      {/* Opis kategorii */}
      <div className="category-description-container">
        <p className="category-description">{description}</p>
      </div>
    </Section>
  );
}
