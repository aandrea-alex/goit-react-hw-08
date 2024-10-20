import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AppRouter from './AppRouter';
import { refreshUser } from '../redux/auth/operations';
import { useAuth } from '../hooks/useAuth';
import Layout from './Layout/Layout.jsx';

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Layout>
      {isRefreshing ? <b>Refreshing user... </b> : <AppRouter />}
    </Layout>
  );
};

export default App;

