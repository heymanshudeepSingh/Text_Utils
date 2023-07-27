import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TextForms(props) {
  const [text, SetText] = useState('');
 
  const handleOnChange = (event) => {
    SetText(event.target.value);
  };

  const handleBtn1 = () => {
    let newTxt = text.toUpperCase();
    SetText(newTxt);
  };

  const handleBtn2 = () => {
    let newTxt = text.toLowerCase();
    SetText(newTxt);
  };
  const resetBox = () => {
    SetText('');
    document.getElementById('MyBox').style.color = 'Black';
  };

  const handleColorChanger = () => {
    let colors = { 1: 'Red', 2: 'Blue', 3: 'Green', 4: 'orange', 5: 'Yellow' };
    let boxText = document.getElementById('MyBox');
    boxText.style.color = colors[Math.floor(Math.random() * 5)];
    console.log('changed color');
    console.log(Math.floor(Math.random() * 5));
  };

  return (
    <>
      <div
        className='container'
        style={{ color: props.mode === `light` ? `black` : `white` }}
      >
        <h1>{props.heading}</h1>
        <div className='mb-3'>
          {props.label.length > 0 && (
            <label htmlfor='MyBox' className='form-label'>
              {props.label}
            </label>
          )}
          <textarea
            className='form-control'
            value={text}
            onChange={handleOnChange}
            id='MyBox'
            rows='8'
          ></textarea>
        </div>
        <button className='btn btn-success mx-2' onClick={handleBtn1}>
          {props.btn1}
        </button>
        <button className='btn btn-success mx-2' onClick={handleBtn2}>
          Convert to lower case
        </button>
        <button className='btn btn-success mx-2' onClick={handleColorChanger}>
          Change Color
        </button>
        <button className='btn btn-success mx-2' onClick={resetBox}>
          Reset
        </button>
      </div>
      <div
        className='container my-3'
        style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
      >
        <h1>Summary</h1>
        <p>
          Word count:{' '}
          {text.trim().length > 0 ? text.trim().split(' ').length : 0} |
          Character count: {text.length}
        </p>
        <p>Time to read words: {0.008 * text.split(' ').length} minutes</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Enter text to preview'}</p>
      </div>
    </>
  );
}
TextForms.propTypes = {
  label: PropTypes.string,
  heading: PropTypes.string,
  btn1: PropTypes.string,
};
TextForms.defaultProps = { label: '', heading: 'Enter Heading' };
