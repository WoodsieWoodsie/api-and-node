'use strict';

var http = require('http');
var math = require('./math');
var port = 3000;

var server = http.createServer(function(request, response){
  response.setHeader('Access-Control-Allow-Origin', '*');
  
  var params = request.url.split('/');
  console.log(params);
  
  var route = params[1];
  var route2 = params[2];

  switch(route){
    case 'math':
      console.log('math\n');
      switch(route2){
        case 'double':
          console.log(math.double(params[3]));
          response.write(`${math.double(params[3])}\n`);
          response.end(); 
          break;
        case 'square':
          console.log(math.square(params[3]));
          response.write(`${math.square(params[3])}\n`);
          response.end(); 
          break; 
        case 'cube':
          console.log(math.cube(params[3]));
          response.write(`${math.cube(params[3])}\n`);
          response.end(); 
          break;
        case 'sum':
          let nums = (params.slice(3));
          console.log(nums);
          console.log(math.sum(nums));
          response.write(`${math.sum(nums)}\n`);
          response.end(); 
          break;
      }
      // response.write(`math\n`);
      response.end(); 
      break;
      
    // case 'add':
    //   var sum = params.slice(2).reduce(function(sum, num){
    //     return(sum + Number(num));
    //   }, 0);
    //   response.write(`sum is ${sum} `);
    //   response.end(); 
    //   break;
    default:
      response.write('Unknown operation\n');
      response.end();   
  }  
});

server.listen(port);
console.log(`Node server listening on port ${port}`)