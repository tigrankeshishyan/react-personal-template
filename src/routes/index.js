import Auth from 'pages/Auth';
import HomePage from 'pages/Home';
import NotFound from 'pages/NotFound';

const routes = [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    exact: true,
    path: '/login',
    component: Auth,
  },
  {
    component: NotFound,
  }
];


export default routes;
