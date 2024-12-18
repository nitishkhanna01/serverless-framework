const Responses = require('../common/API_Responses')

exports.handler = async event => {
  console.log('event',event)

  if (!event.pathParameters || !event.pathParameters.ID){
    //failed withoud id
    return Responses._400({message:'missing ID from path'})
  }
  let ID = event.pathParameters.ID;
  if(data[ID]){
    //return data
    return Responses._200(data[ID])
  }
  //failed as id not in data 
  return Responses._400({message: 'No ID in data'})
}

const data = {
  1234: {name:'Nitish Khanna',age:22},
  4232:{name:'nitish 2',age:24}
}
