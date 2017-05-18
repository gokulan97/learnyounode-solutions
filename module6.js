var fs = require('fs');

module.exports = function(dname, ext, callback)
{
    fs.readdir(dname, function(err, data){
        if(err)
            return callback(err);
        var ex = '.'+ext;
        var files = data.filter(function(e){
            return e.indexOf(ex) != -1;
        });

        callback(null, files);
    })
}
