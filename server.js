'use strict';

var http = require('http');
var math = require('./math');
var gravatar = require('./gravatar');
var counter = require('./counter');

var port = 3000;

var server = http.createServer(function(request, response){
  response.setHeader('Access-Control-Allow-Origin', '*');
  
  var params = request.url.split('/');
  
  var route1 = params[1];
  var route2 = params[2];

  switch(route1){
    case 'math':
      switch(route2){
        case 'double':
          response.write(`${math.double(params[3])}\n`);
          response.end(); 
          break;
        case 'square':
          response.write(`${math.square(params[3])}\n`);
          response.end(); 
          break; 
        case 'cube':
          response.write(`${math.cube(params[3])}\n`);
          response.end(); 
          break;
        case 'sum':
          let nums = (params.slice(3));
          response.write(`${math.sum(nums)}\n`);
          response.end(); 
          break;
        }
      response.end(); 
      break;
    case 'gravatar':
      let hashed = gravatar.hashify(params[2]);
      response.write(`https://s.gravatar.com/avatar/${hashed}?s=80\n`);
      response.end();
      break;
    case 'sentence':
      let string = params[2];
      response.write(`${JSON.stringify(counter.superCounter(string))}\n`);
      response.end(); 
      break;
    default:
      response.write('Unknown operation\n');
      response.end();   
  }  
});

server.listen(port);
console.log(`Node server listening on port ${port}`)