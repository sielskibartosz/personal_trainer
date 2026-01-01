import Section from "../components/Section";
import { useTranslation } from "../i18n/LanguageContext";
import "./Pricing.css";

export default function Pricing() {
  const { t } = useTranslation();

  const pricingOptions = [
    { title: t("pricing.first"), price: "0 zł" },
    { title: t("pricing.one"), price: "70 zł" },
     { title: t("pricing.pair"), price: "70 zł" },
    { title: t("pricing.pack"), price: "600 zł" }
   
  ];

  return (
    <Section id="pricing" title={t("pricing.title")} className="pricing-section">
      

      <div className="pricing-grid">
        {pricingOptions.map((option, index) => (
          <div className="pricing-card" key={index}>
            <h3>{option.title}</h3>
            <p className="price">{option.price}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
