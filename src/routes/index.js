import SignIn from 'pages/SignIn';
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
    component: SignIn,
  },
  {
    component: NotFound,
  }
];


export default routes;
