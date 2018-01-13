import authReducer from './auth';

test('should set user data', () => {
  const action = {
    type: 'LOGIN',
    payload: {uid: 'mocked uid'}
  };
  expect(authReducer({}, action)).toEqual(action.payload);
  
});

test('should remove user data', () => {
  const action = {
    type: 'LOGOUT',
    payload: {}
  };
  expect(authReducer({uid: 'mocked uid'}, action)).toEqual(action.payload);
});
