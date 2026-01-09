import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './assets/stylesheets/default.css'
import Resume from './pages/ResumeTab.jsx'
import Home from './pages/HomeTab.jsx'
import Projects from './pages/ProjectsTab.jsx'
import ProjectPage from './components/ProjectPage.jsx'
import PostPage from './components/PostPage.jsx'


createRoot(document.querySelector('main')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:date/:handle" element={<PostPage />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:handle" element={<ProjectPage />} />

    </Routes>
  </BrowserRouter>,
)
