import { useParams } from "react-router-dom";
import BtnGitHub from "../components/BtnGitHub/BtnGitHub";
import { projects } from "../helpers/projectList";
import "../App.css";
import Navbar from "../components/navbar/Navbar";

const Project = () => {
  const { id } = useParams();
  const project = projects[id];

  return (
    <>
	<Navbar/>
      <main className="section">
        <div className="container">
          <div className="project-details">
            <h1 className="title-1">{project.title}</h1>

            <img
              src={project.imgBig}
              alt={project.title}
              className="project-details__cover"
            />

            <div className="project-details__desc">
              <p>Skills: {project.skills}</p>
            </div>

            {project.gitHubLink && <BtnGitHub link="https://github.com" />}
          </div>
        </div>
      </main>
    </>
  );
};

export default Project;
