import joblySS from "../images/JoblySS.png";
import primalSS from "../images/PrimalSS.png";
import pongSS from "../images/pongSS.jpg";
import "./Projects.css";

const Projects = () => {
  return (
    <div id="projects" className="projects-display">
      {/* <div className="background-overlay"></div> */}
      <h1 className="projects-title">Projects</h1>

      <ul className="projects-table">
        <li className="project-card">
          <a
            href="https://github.com/xjohnsondev/react-jobly-frontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={joblySS} alt='jobly'></img>
          </a>
          </li>
          <li className="project-card">
          <a
            href="https://github.com/xjohnsondev/Primal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={primalSS} alt='primal'></img>
          </a>
          </li>
          <li className="project-card">
          <a
            href="https://github.com/xjohnsondev/PONG"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={pongSS} alt='pong'></img>
          </a>
          </li>
      </ul>
    </div>
  );
};

export default Projects;
