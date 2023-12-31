import React from 'react';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav
      className='navbar bg-dark navbar-expand-lg bg-body-tertiary '
      data-bs-theme={`${props.mode}`}
    >
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          {props.title}
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link to='/' className='nav-link active' >
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-link' >
                About
              </Link>
            </li>
          </ul>
          <form className='d-flex' role='search'>
            {/* <input
              className='form-control me-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            /> */}
            {/* <button className='btn btn-outline-success' type='submit'>
              Search
            </button> */}
            <div className={`form-check form-switch text-${props.mode === `light`?`dark`:`light`}`}>
              <input
                className='form-check-input'
                type='checkbox'
                role='switch'
                id='flexSwitchCheckDefault'
                aria-checked='true'
                onClick={props.toggle}
              />
              <label className='form-check-label' htmlFor='flexSwitchCheckDefault'>
                {`Enable ${props.mode === `light`?`Dark`:`Light`} Mode`}
              </label>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = { title: PropTypes.string };
Navbar.defaultProps = { title: 'TextUtils' };
