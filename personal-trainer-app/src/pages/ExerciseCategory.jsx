import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "../i18n/LanguageContext";
import Section from "../components/Section";
import "./Exercises.css";

export default function ExerciseCategory() {
  const { category } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const exercisesData = {
    stretching: [
      { name: "Rozciąganie nóg", difficulty: "Łatwe", desc: "Opis ćwiczenia 1...", img: "/images/stretch1.jpg" },
      { name: "Rozciąganie ramion", difficulty: "Średnie", desc: "Opis ćwiczenia 2...", img: "/images/stretch2.jpg" },
    ],
    strength: [
      { name: "Przysiady", difficulty: "Średnie", desc: "Opis ćwiczenia 1...", img: "/images/strength1.jpg" },
      { name: "Martwy ciąg", difficulty: "Trudne", desc: "Opis ćwiczenia 2...", img: "/images/strength2.jpg" },
    ],
    core: [
      { name: "Plank", difficulty: "Średnie", desc: "Opis ćwiczenia 1...", img: "/images/core1.jpg" },
      { name: "Russian Twist", difficulty: "Średnie", desc: "Opis ćwiczenia 2...", img: "/images/core2.jpg" },
    ],
    cardio: [
      { name: "Bieganie", difficulty: "Łatwe", desc: "Opis ćwiczenia 1...", img: "/images/cardio1.jpg" },
      { name: "Skakanka", difficulty: "Średnie", desc: "Opis ćwiczenia 2...", img: "/images/cardio2.jpg" },
    ],
  };

  const exercises = exercisesData[category] || [];

  return (
    <Section
      id={`exercises-${category}`}
      title={t(`exercises.${category}`) || category}
      className="exercises-section"
    >
      {/* Przycisk powrotu na górze */}
      <div style={{ marginBottom: "20px", textAlign: "left" }}>
        <button
          onClick={() => navigate("/")}
          style={{
            background: "none",
            border: "none",
            color: "#1e90ff",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            transition: "color 0.3s ease",
          }}
          onMouseOver={e => e.currentTarget.style.color = "#0d6fc0"}
          onMouseOut={e => e.currentTarget.style.color = "#1e90ff"}
        >
          ⬅️ Wróć
        </button>
      </div>

      <div className="exercise-grid">
        {exercises.map((ex, i) => (
          <div key={i} className="exercise-card">
            <img src={ex.img} alt={ex.name} />
            <p>
              {ex.name}{" "}
              <span className={`difficulty ${ex.difficulty.toLowerCase()}`}>
                {ex.difficulty}
              </span>
            </p>
            <p style={{ fontSize: "14px", color: "#ccc" }}>{ex.desc}</p>
          </div>
        ))}
      </div>

      {exercises.length === 0 && <p>Brak danych dla tej kategorii.</p>}
    </Section>
  );
}
