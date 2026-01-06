import React from "react";
import "../assets/stylesheets/projects.css"
import Header from "./Header"
import projectsData from '../data/projectsData'
import { useParams } from "react-router-dom"
import { ChevronLeft } from 'lucide-react'
import { Link } from "react-router-dom";

export default function ProjectPage() {
  const { handle } = useParams();

  const project = projectsData.find(p => p.handle === handle);
  return (
    <>
      <Header></Header>
      <div className="project_page">
        <Link className="button" to={`/projects`}>
          <ChevronLeft />
          Back To All Projects
        </Link>
        <h1>{project.name}</h1>
        <p>{project.description}</p>
      </div>
    </>
  )
}

