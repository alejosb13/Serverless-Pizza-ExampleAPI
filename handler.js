'use strict';
const uuidv1 = require('uuid');
const AWS    = require('aws-sdk');

let sqs          = new AWS.SQS({region: process.env.REGION});
const QUEUE_URL  = process.env.PENDING_ORDER_QUEUE;

module.exports.hacerPedido = (event,context,callback) => {
  const orderId = uuidv1.v1()
  
  const params = {
    MessageBody: JSON.stringify({ orderId: orderId}),
    QueueUrl : QUEUE_URL
  }

  sqs.sendMessage(params, (err,data)=>{
    if(err){
      sendResponse(500,err,callback)
    }else{
      const message = {
        orderId: orderId,
        messageId: data.MessageId
      }
      sendResponse(200, message,callback)
    }
    
  })
};

module.exports.prepararPedido = (event,context,callback) => {
  console.log("prepararPedido");
  console.log(event);
  callback()
};

function sendResponse(statusCode, message, callback){
  const response = {
    statusCode,
    body: JSON.stringify(message)
  }
  callback(null,response)
  
}
