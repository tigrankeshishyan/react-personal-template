import HomePage from 'pages/Home';
import NotFound from 'pages/NotFound';

const routes = [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    component: NotFound,
  }
];


export default routes;
