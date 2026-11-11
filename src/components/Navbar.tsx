import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useLanguage } from "../context/LanguageContext";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const isTouchDevice =
      typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0);

    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: isTouchDevice ? 0.8 : 1.7,
      speed: 1.7,
      effects: true,
      smoothTouch: 0.1,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);
    (window as any).smoother = smoother;
    (window as any).ScrollTrigger = ScrollTrigger;

    const handleResize = () => {
      ScrollSmoother.refresh(true);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    section: string
  ) => {
    e.preventDefault();
    if (smoother) {
      smoother.scrollTo(section, true, "top top");
    } else {
      const el = document.querySelector(section);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          {t.logo}
        </a>
        <a
          href="mailto:lukagurwishvili9@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          lukagurwishvili9@gmail.com
        </a>
        <ul>
          <li>
            <a
              data-href="#about"
              href="#about"
              onClick={(e) => handleNavClick(e, "#about")}
            >
              <HoverLinks text={t.nav.about} />
            </a>
          </li>
          <li>
            <a
              data-href="#work"
              href="#work"
              onClick={(e) => handleNavClick(e, "#work")}
            >
              <HoverLinks text={t.nav.work} />
            </a>
          </li>
          <li>
            <a
              data-href="#contact"
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
            >
              <HoverLinks text={t.nav.contact} />
            </a>
          </li>
          <li className="lang-switcher">
            <button
              type="button"
              className={`lang-btn ${lang === "en" ? "active" : ""}`}
              onClick={() => setLang("en")}
              data-cursor="disable"
            >
              EN
            </button>
            <span className="lang-divider">/</span>
            <button
              type="button"
              className={`lang-btn ${lang === "ka" ? "active" : ""}`}
              onClick={() => setLang("ka")}
              data-cursor="disable"
            >
              ქარ
            </button>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
