fs = require('fs');
var search = '.'+process.argv[3];

fs.readdir(process.argv[2], function(err, res){
    for(var i=0; i<res.length; i++){
        if(res[i].lastIndexOf(search) != -1)
            console.log(res[i]);    
    }
});