import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    id: 1,
    name: "Portfolio Website",
    category: "Web Development",
    tools: "React, GSAP, Tailwind CSS",
    image: "/images/portfolio.webp",
  },
  {
    id: 2,
    name: "E-commerce Platform",
    category: "Full Stack Development",
    tools: "Next.js, TypeScript, MongoDB",
    image: "/images/ecommerce.webp",
  },
  {
    id: 3,
    name: "Resume Processor",
    category: "AI & Automation",
    tools: "Python, Django, PostgreSQL",
    image: "/images/resume.webp",
  },
  {
    id: 4,
    name: "Voting System",
    category: "Blockchain Security",
    tools: "Solidity, React, IPFS",
    image: "/images/voting.webp",
  },
  {
    id: 5,
    name: "Franchise Management System",
    category: "Business Solutions",
    tools: "React, Redux, Firebase",
    image: "/images/franchise.webp",
  },
  {
    id: 6,
    name: "Cloud Chatbot",
    category: "AI/ML",
    tools: "IBM Watson, Node.js, Express.js",
    image: "/images/chatbot.webp",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
    
      if (!box.length) return; // Prevent error if no .work-box exists
    
      const workContainer = document.querySelector(".work-container");
      if (!workContainer) return; // Prevent error if .work-container doesn't exist
    
      const rectLeft = workContainer.getBoundingClientRect().left;
      const rect = box[0]?.getBoundingClientRect(); // Optional chaining
      const parentWidth = box[0]?.parentElement?.getBoundingClientRect().width; // Optional chaining
    
      if (!rect || !parentWidth) return; // Prevent errors if undefined
    
      let padding = parseInt(window.getComputedStyle(box[0]).padding) / 2 || 0;
    
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }
    

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={project.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and Features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
