import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Projects from "./pages/Projects"
import Visualization from "./pages/Visualization"
import Template from './components/Template';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ProjectsProvider, { ProjectsContext } from './_contexts/ProjectsContext';
import './index.css';

function App() {
  return (
    <ProjectsContext.Provider value={ProjectsProvider()}>
      <Router>
        <Routes>
          <Route path="/" element={<Template/>}>
            <Route index element={<Home/>}/>
            <Route path="projects" element={<Projects/>}/>
            <Route path="visualization" element={<Visualization/>}/>
            <Route path="community-dev-plan" element={<p>Community Dev. Plan</p>}/>
            <Route path="contact" element={<Contact/>}/>
          </Route>
        </Routes>
      </Router>
    </ProjectsContext.Provider>
  )
}

export default App