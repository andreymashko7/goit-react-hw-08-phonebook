import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import phonebook from '../images/phonebook.png';

const Homeview = () => (
  <>
    <h1 className="homeView-title">
      <img src={phonebook} alt="" width="42" className="phonebook-icon" />
      Welcome to the phonebook app
    </h1>

    <div className="homeView-info">
      <p className="homeView-text">
        please
        <span>
          <Link to="/register" className="homeView-link">
            {' '}
            register{' '}
          </Link>
        </span>
        or
        <span>
          <Link to="/login" className="homeView-link">
            {' '}
            sign in
          </Link>
        </span>
      </p>
    </div>
  </>
);

export default Homeview;
