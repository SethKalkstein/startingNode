const adder = (a, b) => `The sum is ${a+b}`;
const multiplyer = (a, b) => `The product is ${a*b}`;
const subtracter = (a, b) => `The difference is ${a-b}`;
const divider = (a, b) => `The decimal ratio is ${a/b}`;

//quotes not needed for the associate names
module.exports = {"adder": adder,
                  "multiplyer": multiplyer,
                  "subtracter": subtracter,
                  "divider": divider}
//or

module.exports.add = (a, b) => `The sum is ${a+b}`;
module.exports.multiply = (a, b) => `The product is ${a*b}`;
module.exports.subtract = (a, b) => `The difference is ${a-b}`;
module.exports.divide = (a, b) => `The decimal ratio is ${a/b}`;

module.exports.favNum = 7;
