import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Experience from './pages/Experience'
import Education from './pages/Education'
import Testimonials from './pages/Testimonials'
import Blog from './pages/Blog'
import Page404 from './pages/Page404'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/education' element={<Education />} />
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='*' element={<Page404 />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

// https://uxpilot.ai/p/MLMclcHm0KiQO9FAcmA6?wireframeId=D13ELeqCv5ZYDB2D7L66

export default App