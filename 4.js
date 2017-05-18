var fs = require('fs');

fs.readFileSync(process.argv[2], function(err,content){
    if(err)
    return;
console.log(content.toString().split('\n').length-1)
});