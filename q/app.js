var Q = require('q');
var fs = require('fs');

var success = function(product){
   console.log('Success : ['+product.id+'] / '+product.label);
};

var error = function(error){
   console.log('Error');
};

getProduct(1234).then(success,error);


function getProduct(id){
   var deferred = Q.defer();
   
   fs.readFile("product.json", "utf-8", function (error, data) {
      if (error) {
         deferred.reject(new Error(error));
      } else {
         deferred.resolve(JSON.parse(data));
      }
   });

   return deferred.promise;
}


