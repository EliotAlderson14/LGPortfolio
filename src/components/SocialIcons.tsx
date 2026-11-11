import { FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";
import { useLanguage } from "../context/LanguageContext";

const SocialIcons = () => {
  const { t } = useLanguage();

  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;
    if (!social) return;

    const cleanups: (() => void)[] = [];

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;
      let frameId: number;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        frameId = requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const currentRect = elem.getBoundingClientRect();
        const x = e.clientX - currentRect.left;
        const y = e.clientY - currentRect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = currentRect.width / 2;
          mouseY = currentRect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);
      updatePosition();

      cleanups.push(() => {
        cancelAnimationFrame(frameId);
        document.removeEventListener("mousemove", onMouseMove);
      });
    });

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a
            href="https://instagram.com/luka.gurtsishvili"
            target="_blank"
            rel="noreferrer"
            title="@luka.gurtsishvili"
          >
            <FaInstagram />
          </a>
        </span>
        <span>
          <a
            href="mailto:lukagurwishvili9@gmail.com"
            title="lukagurwishvili9@gmail.com"
          >
            <FaEnvelope />
          </a>
        </span>
        <span>
          <a href="tel:+995593639683" title="593 639 683">
            <FaPhone />
          </a>
        </span>
      </div>
      <a
        className="resume-button"
        href="https://instagram.com/luka.gurtsishvili"
        target="_blank"
        rel="noreferrer"
      >
        <HoverLinks text={t.contact.resumeBtn} />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
