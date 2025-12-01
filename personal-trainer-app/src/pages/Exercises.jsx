import Section from "../components/Section";
import { useTranslation } from "../i18n/LanguageContext";
import { useState } from "react";
import "./Exercises.css";

export default function Exercises() {
  const { t } = useTranslation();

  // Lista ćwiczeń z dodatkowymi szczegółami
  const exerciseImages = [
    {
      src: "/images/ex1.jpg",
      label: t("exercises.stretching"),
      
    },
    {
      src: "/images/ex2.jpg",
      label: t("exercises.strength"),
      
    },
    {
      src: "/images/ex3.jpg",
      label: t("exercises.core"),
      
    },
    {
      src: "/images/ex4.jpg",
      label:  t("exercises.cardio"),
     
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleExercise = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Section id="exercises" title={t("exercises.title")} className="exercises-section">
      

      <div className="exercise-grid">
        {exerciseImages.map((ex, index) => (
          <div className="exercise-card" key={index} onClick={() => toggleExercise(index)}>
            <img src={ex.src} alt={ex.label} />
            <p>{ex.label}</p>

            {/* Warunkowe renderowanie szczegółów po kliknięciu */}
            {activeIndex === index && (
              <div className="exercise-details">
                {ex.details.map((detail, i) => (
                  <div key={i}>
                    <p>{detail.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
