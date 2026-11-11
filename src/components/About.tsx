import "./styles/About.css";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const { lang, t } = useLanguage();

  return (
    <div className="about-section" id="about">
      <div className="about-me" key={lang}>
        <h3 className="title">{t.about.title}</h3>
        <p className="para about-para">{t.about.p1}</p>
        <p className="para about-para">{t.about.p2}</p>
        <p className="para about-para">{t.about.p3}</p>
        <p className="para about-para">{t.about.p4}</p>
      </div>
    </div>
  );
};

export default About;
