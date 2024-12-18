const Responses = require('../common/API_Responses')
const S3 = require('../common/S3')

const bucket = process.env.bucketName;

exports.handler = async event => {
  console.log('event',event)

  if (!event.pathParameters || !event.pathParameters.fileName){
    //failed withoud id
    return Responses._400({message:'missing fileName from path'})
  }
  let fileName = event.pathParameters.fileName;

  const data = JSON.parse(event.body);

  const newData = await S3.write(data, fileName, bucket).catch(err =>{
    console.log("Error in S3 write", err)
    return null;
  });
  
  if(!newData){
    return Responses._400({message: 'failed to write newData by filename'})
  }
  return Responses._200({newData})
}