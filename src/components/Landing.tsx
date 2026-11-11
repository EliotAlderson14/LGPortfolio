import { PropsWithChildren, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { refreshLandingOnLangChange } from "./utils/initialFX";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  const { lang, t } = useLanguage();

  useEffect(() => {
    refreshLandingOnLangChange();
  }, [lang]);

  return (
    <div className="landing-section" id="landingDiv">
      <div className="landing-container" key={lang}>
        <div className="landing-intro">
          <h2>{t.landing.greeting}</h2>
          <h1>
            {t.landing.firstName}
            <br />
            <span>{t.landing.lastName}</span>
          </h1>
        </div>
        <div className="landing-info">
          <h3>{t.landing.creative}</h3>
          <h2 className="landing-info-h2">
            <div className="landing-h2-1">{t.landing.role1}</div>
            <div className="landing-h2-2">{t.landing.role2}</div>
          </h2>
          <h2>
            <div className="landing-h2-info">{t.landing.role2}</div>
            <div className="landing-h2-info-1">{t.landing.role1}</div>
          </h2>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Landing;
