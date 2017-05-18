var http = require('http');

var url = process.argv[2];
var ans = "";

http.get(url, function(data){
    data.on("data", function(dat){
        ans += dat;
    });
    data.on("end", function(){
        console.log(ans.length);
        console.log(ans);
    })
})