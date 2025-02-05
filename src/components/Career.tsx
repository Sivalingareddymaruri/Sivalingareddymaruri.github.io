import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web developer Intern</h4>
                <h5>SSIT</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
            As a Web Developer Intern, I have assisted in designing, developing, and maintaining websites using technologies like HTML, CSS, JavaScript, and frameworks such as React.My role involves optimizing performance, and ensuring responsiveness across different devices
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>UI designer Intern</h4>
                <h5>Coding cult</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
            As a UI/UX Designer Intern, I have involved in conducting user research to understand user needs and translating them into intuitive wireframes and interfaces.I have created interactive prototypes, collaborate with developers to ensure seamless design implementation, and refine designs based on user feedback.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Position In Company</h4>
                <h5>Company Name</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              labore sit non ipsum temporibus quidem, deserunt eaque officiis
              mollitia ratione suscipit repellat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
