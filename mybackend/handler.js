'use strict';

const todos = [
  {
    id:1,
    name : "code"
  },
  {
    id:2,
    name : "sleep"
  },
  {
    id:3,
    name : "drink"
  }

];

module.exports.getTodos = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(todos),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
