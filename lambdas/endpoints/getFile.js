const Responses = require('../common/API_Responses')
const S3 = require('../common/S3')

const bucket = process.env.bucketName;

exports.handler = async event => {
  console.log('event', event);

  if (!event.pathParameters || !event.pathParameters.fileName) {
    // Missing fileName from path
    return Responses._400({ message: 'missing fileName from path' });
  }

  let fileName = event.pathParameters.fileName;

  // Attempt to retrieve the file from S3
  let file;
  try {
    file = await S3.get(fileName, bucket);
  } catch (err) {
    console.log("Error in S3 get", err);
    return Responses._500({ message: 'Failed to retrieve file from S3', error: err.message });
  }

  // If the file could not be fetched
  if (!file) {
    return Responses._400({ message: 'Failed to read data by filename' });
  }

  // If everything is successful, return the file data
  return Responses._200({ file });
};
