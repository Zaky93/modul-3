// // // create connection for Harper DB
// const harperive = require("harperive");
// // const configuration = {
// //   username: process.env.zaky_,
// //   password: process.env.rxking,
// //   schema: process.env.classroom,
// //   harperHost: process.env.modul-03-zaky.harperdbcloud.com,
// // };
//  harperive.Client(configuration);
// module.exports = d// const db = newb;

// var request = require('request');
// var options = {
//   'method': 'POST',
//   'url': 'https://modul-03-zaky.harperdbcloud.com',
//   'headers': {
//     'Content-Type': 'application/json',
//     'Authorization': 'Basic emFreV86cnhraW5n'
//   },
//   body: JSON.stringify({
//     "operation": "describe_all"
// })

// };
// request(options, function (error, response) { 
//   if (error) throw new Error(error);
//   console.log(response.body);
// });

var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://modul-03-zaky.harperdbcloud.com',
  'headers': {
    'Content-Type': 'application/json',
    'Authorization': 'Basic emFreV86cnhraW5n'
  },
  body: JSON.stringify({
    "operation": "describe_all"
})

};
request(options, function (error, response) { 
  if (error) throw new Error(error);
  console.log(response.body);
});