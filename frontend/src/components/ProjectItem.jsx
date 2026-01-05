import { Link } from "react-router-dom";

export default function ProjectItem(props) {
  const project = props.project;
  return (
    <div className="project_item">
      <div className="project_info">
        <h2> {project.name} </h2>
        <p>{project.description}</p>
        <Link to={`/projects/${project.handle}`}>View Project Details</Link>
      </div>
      <img src={project.thumbnail}></img>
    </div>    
  );
}