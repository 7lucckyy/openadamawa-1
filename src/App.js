import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Projects from "./Components/Projects"
import Visualization from "./Components/Visualization"
import './bootstrap.min.css';
import Template from './Components/Template';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Template/>}>
          <Route index element={<Projects/>}/>
          <Route path="visualization" element={<Visualization/>}/>
          <Route path="projects" element={<p>Projects</p>}/>
          <Route path="login" element={<p>Login</p>}/>
        </Route>
      </Routes>
    </Router>
    
  )
}

export default App