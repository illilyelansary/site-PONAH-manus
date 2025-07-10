import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import des pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Members from './components/pages/Members';
import Activities from './components/pages/Activities';
import News from './components/pages/News';
import Publications from './components/pages/Publications';
import Contact from './components/pages/Contact';

// Import éventuel de Layout/Navbar si tu en as un
// import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      {/* <Navbar /> si tu as une barre de navigation globale */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<About />} />
        <Route path="/membres" element={<Members />} />
        <Route path="/activites" element={<Activities />} />
        <Route path="/actualites" element={<News />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
