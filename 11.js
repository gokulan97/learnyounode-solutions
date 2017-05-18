var http = require('http');
var fs = require('fs');

http.createServer(function(request, response){
    src = fs.createReadStream(process.argv[3]);
    src.pipe(response);
})
.listen(Number(process.argv[2]));