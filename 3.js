var fs = require('fs');

content = fs.readFileSync(process.argv[2]);
console.log(content.toString().split('\n')-1);