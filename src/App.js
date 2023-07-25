import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';

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
  return (
    <>
      <Navbar title='TextUtils' mode={mode} toggle={toggleMode} />
      <div className='container'>
        <TextForms
          heading='Enter Text:'
          btn1='Convert to uppercase'
          mode={mode}
        />
      </div>
    </>
  );
}

export default App;
