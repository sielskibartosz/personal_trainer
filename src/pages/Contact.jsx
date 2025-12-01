import Section from "../components/Section";
import { useTranslation } from "../i18n/LanguageContext";
import "./Contact.css";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <Section id="contact" title={t("contact.title")} className="contact-section">
      <div className="contact-content">
        <div className="contact-card">
          <h3>{t("contact.phone")}</h3>
          <p>
            <a href="tel:692399930">692 399 930</a>
          </p>
        </div>

        <div className="contact-card">
          <h3>{t("contact.email")}</h3>
          <p>
            <a href="mailto:barteksdepot@gmail.com">barteksdepot@gmail.com</a>
          </p>
        </div>
      </div>
    </Section>
  );
}
