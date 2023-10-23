import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Login from './login';
import './App.css';
import Blog from './Blog';
import Fairs from './Fairs';
import Register from './Register';

function App() {
  return (
    <Router>
      <div>
        <header>
          <div style={{ color: 'white', fontWeight: 'bold' }}>EasyHire</div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li style={{ marginRight: '40px' }}>
                <Link to="/fairs">Fairs</Link>
              </li>
              <li style={{ marginRight: '5px', color: 'white', fontWeight: 'bold'}}>
                <Link to="/login"> Login |</Link>
              </li>
              <li style={{ fontWeight: 'bold'}}>
                <Link to="/register"> Register</Link>
              </li>
              <li style={{ fontWeight: 'bold'}}>
                <Link to="/Signup"> Signup</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/fairs" element={<Fairs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
