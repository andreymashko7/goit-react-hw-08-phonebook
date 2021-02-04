import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import ContactsView from './views/ContactsView';
import Homeview from './views/HomeView';
import Container from './components/Container';
import AppBar from './components/AppBar';
import './App.css';
import authOperations from './redux/auth/auth-operations';
import authSelectors from './redux/auth/auth-selectors';

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <Container>
        <AppBar />

        <Switch>
          <PublicRoute exact path="/">
            <Homeview />
          </PublicRoute>

          <PublicRoute exact path="/register" restricted>
            <RegisterView />
          </PublicRoute>

          <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
            <LoginView />
          </PublicRoute>

          <PrivateRoute path="/contacts" redirecTo="/login">
            <ContactsView />
          </PrivateRoute>
        </Switch>
      </Container>
    )
  );
}
