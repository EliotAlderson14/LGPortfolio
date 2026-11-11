import "./styles/Career.css";
import { useLanguage } from "../context/LanguageContext";

const Career = () => {
  const { t } = useLanguage();

  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          {t.career.heading1} <span>{t.career.headingAmp}</span>
          <br /> {t.career.heading2}
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {t.career.items.map((item, idx) => (
            <div className="career-info-box" key={idx}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{item.role}</h4>
                  <h5>{item.company}</h5>
                </div>
                <h3>{item.year}</h3>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
