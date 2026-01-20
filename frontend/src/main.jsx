import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './assets/stylesheets/default.css'
import ResumeTab from './pages/ResumeTab.jsx'
import HomeTab from './pages/HomeTab.jsx'
import ProjectsTab from './pages/ProjectsTab.jsx'
import ProjectPage from './components/ProjectPage.jsx'
import PostPage from './components/PostPage.jsx'

createRoot(document.querySelector('main')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeTab />} />
      <Route path="/blog/:date/:handle" element={<PostPage />} />
      <Route path="/resume" element={<ResumeTab />} />
      <Route path="/projects" element={<ProjectsTab />} />
      <Route path="/projects/:handle" element={<ProjectPage />} />

    </Routes>
  </BrowserRouter>,
)