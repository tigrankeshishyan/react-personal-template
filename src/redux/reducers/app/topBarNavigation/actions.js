import types from './types';
import navigationRoutes from 'mockdata/navigationRoutes.json';

function setTopBarNavigation() {
  return {
    type: types.SET_TOP_BAR_NAVIGATION,
    payload: navigationRoutes,
  }
}

export default {
  setTopBarNavigation,
}
