var figlet = require('figlet');
const npmModule = () => {
    return figlet.textSync('Hello World!!', function (err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data)
    })
};
module.exports = npmModule