import { NavLink } from 'react-router-dom';
import React from 'react';
import s from '../Navigation/Navigation.module.css';

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        Registration
      </NavLink>

      <NavLink
        to="/login"
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        Login
      </NavLink>
    </div>
  );
}
