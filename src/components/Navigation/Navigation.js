import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from 'react';
import s from './Navigation.module.css';
import authSelectors from '../../redux/auth/auth-selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}>
        HomePage
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={s.link}
          activeClassName={s.activeLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
