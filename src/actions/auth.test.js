import { setStateOnLogin, setStateOnLogout } from './auth';

test('set login', () => {
  expect(setStateOnLogin({uid: 'mocked uid'})).toEqual({
    type: 'LOGIN',
    payload: {uid: 'mocked uid'}
  });
});

test('set logout', () => {
  expect(setStateOnLogout()).toEqual({
    type: 'LOGOUT',
    payload: {}
  });
});
