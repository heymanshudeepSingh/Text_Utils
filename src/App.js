import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('dark');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#303740';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };

  window.addEventListener('load', (event) => {
    if (mode === 'light') {
      document.body.style.backgroundColor = 'white';
    } else {
      document.body.style.backgroundColor = '#303740';
    }
  });
  return (
    <Router>
      <>
        <Navbar title='TextUtils' mode={mode} toggle={toggleMode} />
        <div className='container'>
          <Routes>
            <Route
              exact path='/'
              element={
                <TextForms
                  heading='Enter Text:'
                  btn1='Convert to uppercase'
                  mode={mode}
                />
              }
            />
            <Route 
            exact path='/about' 
            element={<About />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
