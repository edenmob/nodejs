var async = require("async");

var getFile = function(file,callback){
   console.log('Récupération du fichier : '+file);
   callback(null,{data:file});
};

async.map(['file1','file2','file3'], getFile, function(err, results){
    // results is now an array 
    console.log(results);
});
