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

  return (
    <>
      <div className='container'>
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
        <button className="btn btn-success mx-2" onClick={handleBtn2}>Convert to lower case</button>
      </div>
      <div className='container my-3'>
        <h1>Summary</h1>
        <p>
          Word count: {text.split(' ').length} | Character count: {text.length}
        </p>
        <p>Time to read words: {0.008 * text.split(' ').length} minutes</p>
        <h2>Preview</h2>
        <p>{text}</p>
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
