var http = require('http');

var url = process.argv[2];


http.get(url, function(data){
    data.on("data", function(dat){
        console.log(dat.toString());
    });
    data.on("error", function(){
        console.log("error");
    })
    data.on("end", function(){
        console.log("Program ends here.")
    })
})