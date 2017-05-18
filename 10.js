var net = require('net');

net.createServer(function(socket){
    var date = new Date();
    
    var month = date.getMonth()+1;
    if(month < 10)
        month = '0'+month;

    var day = date.getDate();
    if(day < 10)
        day = '0'+day;

    var hour = date.getHours();
    if(hour < 10)
        hour = '0'+hour;
    
    var min = date.getMinutes();
    if(min < 10)
        min = '0'+min;
    
    var d = date.getFullYear()+"-"+month+"-"+day+" "
                +hour+":"+min+"\n";
    socket.end(d.toString());
}).listen(process.argv[2]);