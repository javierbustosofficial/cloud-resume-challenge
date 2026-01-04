import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'
import Resume from './pages/Resume.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'

createRoot(document.querySelector('main')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/projects" element={<Projects />} />

    </Routes>
  </BrowserRouter>,
)
