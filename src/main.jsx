import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.scss'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage'

import Footer from './Components/Footer/Footer'
import AboutPage from './Components/AboutPage/AboutPage'
import ProjectPage from './Components/ProjectPage/ProjectPage'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
   <div>
 
   </div>
      <Routes>
        <Route exact path="/" element={<HomePage />} component={HomePage} />
        <Route path="/about" element={<AboutPage />} component={AboutPage} />
        <Route path="/proyectos" element={<ProjectPage />} component={ProjectPage} />
      </Routes>
      <div>
 
        <Footer></Footer>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
)
