const Joi = require('joi');

module.exports = Joi.object({
  productId: Joi.number().positive().required().strict()
  .messages({
    'any.required': '400 |"productId" is required',
    'number.positive': '422|"quantity" must be greater than or equal to 1',
  }),
  quantity: Joi
  .number()
  .integer()
  .positive()
  .strict()
  .required()
  .messages({
    'any.required': '400|"quantity" is required',
    'number.positive': '422|"quantity" must be greater than or equal to 1',
  }),
});

// const bodyTransform = (body) => {
//   if (Array.isArray(body)) {
//     const salesList = body.map((e) => (
//       {
//         productId: e.productId,
//         quantity: e.quantity,
//       }
//     ));
//     return salesList;
//   } 
//     return false;
// };