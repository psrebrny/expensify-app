export default (state = {}, action) => {
  
  const authState = state || JSON.parse(localStorage.getItem('auth')) || {};
  
  switch (action.type) {
    case 'LOGIN':
      return {
        ...action.payload
      };
    case 'LOGOUT':
      return {
        ...action.payload
      };
    default:
      return authState;
  }
}