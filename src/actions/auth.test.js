import { setStateOnLogin, setStateOnLogout } from './auth';
import { LocalStorageMock } from '../test/localStorage';

global.localStorage = new LocalStorageMock;
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
