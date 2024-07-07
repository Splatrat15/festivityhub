import React from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import BrowserRouter
import './index.css';

import Home from './pages/home/Home';
import Jobs from './pages/jobs/Jobs';
import Settings from './pages/settings/Settings';
import NotFound from './pages/notFound/NotFound';  // Rename notFound to NotFound (Javascript convention)

const App = () => {
    return (
        <Router>
            <div className='FH_Container'>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/jobs" element={<Jobs />} />  {/* Ensure paths are lowercase */}
                    <Route path="/settings" element={<Settings />} />
                    <Route path="*" element={<NotFound />} />  {/* Use NotFound component with uppercase N */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;