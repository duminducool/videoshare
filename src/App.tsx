import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Upload } from './pages/Upload';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';
import { VideoPage } from './pages/VideoPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <Header />
        <main className="pt-24 pb-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/video/:id" element={<VideoPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;