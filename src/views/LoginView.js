import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';
import s from '../App.css';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Sign in</h1>

      <form onSubmit={handleSubmit} autoComplete="off" className={s.form}>
        <label className={s.label}>
          Email
          <input
            className={s.input}
            onChange={handleChange}
            type="email"
            name="email"
            value={email}
          ></input>
        </label>

        <label className={s.label}>
          Password
          <input
            className={s.input}
            onChange={handleChange}
            type="password"
            name="password"
            value={password}
          ></input>
        </label>

        <button type="submit" className="Button">
          Log in
        </button>
      </form>
    </div>
  );
}
