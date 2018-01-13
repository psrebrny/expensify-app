import { firebase, googleAuthProvider } from '../firebase/firebase';

export const setStateOnLogin = (userObj = {}) => {
  return {
    type: 'LOGIN',
    payload: userObj
  };
};

export const setStateOnLogout = (userObj = {}) => {
  return {
    type: 'LOGOUT',
    payload: userObj
  };
};

export const login = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const logout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};