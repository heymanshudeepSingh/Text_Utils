import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';

function App() {
  return (
    <>
      <Navbar title='TextUtils' />
      <div className='container'>
        <TextForms heading='Enter Text:' btn1='Convert to uppercase' />
      </div>
    </>
  );
}

export default App;
