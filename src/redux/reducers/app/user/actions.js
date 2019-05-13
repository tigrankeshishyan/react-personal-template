import types from './types';
import { userKey } from '_constants';

// FIXME: Temp solution for saving user to the local storage
const saveUserToSession = user => sessionStorage.setItem(userKey, JSON.stringify(user));

function setActiveUser(user = { id: 'someId' }) {
  saveUserToSession(user);

  return {
    type: types.SET_ACTIVE_USER,
    payload: user,
  }
}

function loginUser(userData) {
  // NOTE:  Do Your Fetch here. will add API support later
  // fetch(/apiUrl, userData).then()
  // User model should contain "id" after which logged user can access to the pages

  // console.log('userData --> : ', userData);

  return dispatch => {
    fetch('/login').then(res => {
      dispatch(setActiveUser(res.data));
    });
  }
}

function logoutUser(userData) {
  // NOTE:  Do Your Fetch here. will add API support later
  // fetch(/apiUrl, userData).then()
  // User model should contain "id" after which logged user can access to the pages

  // console.log('userData --> : ', userData);

  return dispatch => {
    fetch('/logout').then(res => {
      dispatch(setActiveUser({}));
    });
  }
}

function registerNewUser(userData) {
  // NOTE:  Do Your Fetch here. will add API support later
  // fetch(/apiUrl, userData).then()
  // User model should contain "id" after which logged user can access to the pages

  // console.log('userData --> : ', userData);

  return dispatch => {
    fetch('/addUser').then(res => {
      dispatch(setActiveUser(res.data));
    });
  }
}

export default {
  loginUser,
  logoutUser,
  setActiveUser,
  registerNewUser,
}
