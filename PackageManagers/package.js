


const npmModule=()=>{

var figlet = require('figlet');
 
figlet.textSync('Hello World!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
})
};