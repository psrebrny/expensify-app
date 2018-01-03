const moment = require.requireActual('moment');

export default (timestamp = 0) => {
  moment.isMoment = () => {
  };
  
  return moment(timestamp);
}