import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { useLanguage } from "../context/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>{t.contact.heading}</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>{t.contact.emailLabel}</h4>
            <p>
              <a href="mailto:lukagurwishvili9@gmail.com" data-cursor="disable">
                lukagurwishvili9@gmail.com
              </a>
            </p>
            <h4>{t.contact.phoneLabel}</h4>
            <p>
              <a href="tel:+995593639683" data-cursor="disable">
                593 639 683
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>{t.contact.socialLabel}</h4>
            <a
              href="https://instagram.com/luka.gurtsishvili"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram (@luka.gurtsishvili) <MdArrowOutward />
            </a>
            <a
              href="mailto:lukagurwishvili9@gmail.com"
              data-cursor="disable"
              className="contact-social"
            >
              lukagurwishvili9@gmail.com <MdArrowOutward />
            </a>
            <a
              href="tel:+995593639683"
              data-cursor="disable"
              className="contact-social"
            >
              +995 593 639 683 <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              {t.contact.designedBy} <br /> <span>{t.contact.name}</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
