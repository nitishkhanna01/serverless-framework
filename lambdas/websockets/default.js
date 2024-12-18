const Responess = require('../common/API_Responses')
exports.handler = async event => {
  console.log('event', event)
  return Responess._200({message: 'Default'})
};