import MainPage from './components/MainPage';
import AdminPage from './components/AdminPage';

const routes = [
  {
    exact: true,
    path: '/',
    component: MainPage
  },
  {
    path: '/admin',
    component: AdminPage
  }
];

export default routes;
