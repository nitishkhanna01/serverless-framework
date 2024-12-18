const Responess = require('../common/API_Responses')
const Dynamo = require('../common/Dynamo')

const tableName = process.env.tableName;

exports.handler = async event => {
  console.log('event', event)
  const { connectionId: connectionID} = event.requestContext;

  const data = {
    ID: connectionID,
    date: Date.now(),
    messages: []
  }

  await Dynamo.write(data, tableName)

  return Responess._200({message: 'Connected'})
};