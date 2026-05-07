import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br />experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack Android Developer</h4>
                <h5>IoT Lab, KIIT University</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Led Android feature development and contributed to architecture decisions across
              collaborative IoT engineering projects using Kotlin and Jetpack Compose. Integrated
              hardware sensor APIs into Android applications, ensuring reliable bidirectional data
              flow between physical devices and the mobile interface through modular service design.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Android Developer</h4>
                <h5>Google Developer Group (GDG), KIIT University</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Delivered hands-on seminar sessions on Android development with Kotlin and Jetpack
              Compose, improving practical skills for 50+ student participants. Mentored junior
              developers on MVVM architecture, Android SDK fundamentals, and REST API integration
              as part of community-driven peer learning initiatives.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech – Computer Science & System Engineering</h4>
                <h5>KIIT University · CGPA 8.68</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Pursuing Computer Science & System Engineering at Kalinga Institute of Industrial
              Technology (KIIT), Bhubaneswar (2023–2027). Building production-grade systems in
              Java, Kotlin, and Spring Boot while seeking SDE internship opportunities at
              scalable engineering teams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
