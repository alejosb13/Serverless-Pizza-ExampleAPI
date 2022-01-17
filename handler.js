'use strict';
const uuidv1 = require('uuid');
module.exports.hacerPedido = async (event,context,callback) => {
  const orderId = uuidv1.v1()
  
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `El Id del pedido es ${orderId}`,
    })

  }
  
  callback(null,response)
};
