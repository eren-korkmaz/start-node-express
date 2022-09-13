// const FOO = 'bar';
// module.exports = {
//   FOO
// }

//const {FOO} = require('foo');

module.exports = {
    PUB_PORT: process.env.PORT || 3000,
};

/**
 * 
 * const paymentMethods = {
  STRIPE: {
    key: 'STRIPE',
    value: 1,
    title: 'Stripe Payment', 
  },
  PAYPAL: {
    key: 'PAYPAL',
    value: 2,
    title: 'Paypal Payment',    
  },
  AMAZON_PAYMENT: {
    key: 'AMAZON_PAYMENT',
    value: 3,
    title: 'Amazon Payment',    
  }
}

const shippingMethods = {
  SKYNET: 'SKYNET',
  GDEX: 'GDEX',
  DHL: 'DHL',
  UPS: 'UPS',
}
paymentMethods.AMAZON_PAYMENT

// {
//    key: 'AMAZON_PAYMENT',
//    value: 3,
//    title: 'Amazon Payment',    
// }

Object.keys(paymentMethods).map(key => {
  console.log(paymentMethods[key])
})

paymentMethods.find(method => method.key === 'AMAZON_PAYMENT')
 */