export const getApp = (state) => state.app;
export const getData = (state) => state.data;

// ------- APP
export const getTopBarNavigation = state => getApp(state).topBarNavigation;
export const getUser = state => getApp(state).user;
