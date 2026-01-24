import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Skills from './components/Skills';
import ProjectsPage from './components/Projects';
import ScrollToTop from './components/ScrollToTop';
import About from './components/About';
import Contact from './components/Contact';

// Helper component to scroll to top on route change
// We need to create this locally or inside App
const ScrollToTopWrapper = () => {
    // We will implement this as a separate component effectively inside the router
    // But since I didn't create it yet, I'll allow the router to handle it or create it now.
    // Actually, let's just create a dummy component here or separate file.
    return null; 
}


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<ProjectsPage isFullPage={true} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
