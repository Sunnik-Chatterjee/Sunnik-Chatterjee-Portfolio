import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`,
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>01</h3>
                <div>
                  <h4>Doctor Appointment System</h4>
                  <p>Backend Engineering</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Spring Boot, PostgreSQL, JWT, WebSockets, Firebase Cloud Messaging, Docker</p>
            </div>
            <a
              href="https://github.com/Sunnik-Chatterjee/doctor-appointment"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "contents" }}
            >
              <WorkImage image="/images/placeholder.webp" alt="Doctor Appointment System" />
            </a>
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>02</h3>
                <div>
                  <h4>DealSpy – Price Tracker</h4>
                  <p>Full-Stack Engineering</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Kotlin, Jetpack Compose, Spring Boot, FastAPI, PostgreSQL, Firebase, MVVM</p>
            </div>
            <a
              href="https://github.com/Sunnik-Chatterjee/dealspy"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "contents" }}
            >
              <WorkImage image="/images/placeholder.webp" alt="DealSpy Price Tracking App" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
