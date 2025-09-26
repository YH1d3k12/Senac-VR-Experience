import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Viewer from './pages/Viewer';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <Router basename='/Senac-VR-Experience/'>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/viewer/:id" element={<Viewer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

