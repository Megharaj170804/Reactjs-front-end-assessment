import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import CineFeed from './pages/CineFeed';
import FlickList from './pages/FlickList';
import MovieNightPicker from './pages/MovieNightPicker';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/cinefeed" replace />} />
          <Route path="/cinefeed" element={<CineFeed />} />
          <Route path="/flicklist" element={<FlickList />} />
          <Route path="/movie-picker" element={<MovieNightPicker />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;