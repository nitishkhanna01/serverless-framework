const Responess = require('../common/API_Responses')
const Dynamo = require('../common/Dynamo')

const tableName = process.env.tableName;

exports.handler = async event => {
  console.log('event', event);

  const { connectionId: connectionID } = event.requestContext;

  try {
      await Dynamo.delete(connectionID, tableName);
      return Responess._200({ message: 'Disconnected' });
  } catch (err) {
      console.error('Error disconnecting:', err);
      return Responess._500({ message: 'Failed to disconnect' });
  }
};
