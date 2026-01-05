import { useState } from 'react'
import '../assets/stylesheets/projects.css'
import Header from '../components/Header'
import projectsData from '../data/projectsData'
import ProjectItem from '../components/ProjectItem'

function ProjectPage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <div className="project_page">
        <div className="projects">
          {projectsData.map((project) => (
            <ProjectItem key={project.handle} project={project} />
          ))}
        </div>
      </div>
    </>
  )
}

export default ProjectPage