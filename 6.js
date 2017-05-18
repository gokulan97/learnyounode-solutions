var module6 = require('./module6.js');

var dname = process.argv[2];
var ext = process.argv[3];

function callback(err, data){
    if(err)
        console.log("Error");
    else
        for(var i=0; i<data.length; i++)
            console.log(data[i]);
}

module6(dname, ext, callback);