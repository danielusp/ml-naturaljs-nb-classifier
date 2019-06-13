const natural = require('natural');
const measurement = require('./lib/measurement');

(async (type = 'trainPredict') => {
    let msgColor = "";

    // Define module based on user enter
    switch(type) {
        case 'train':
            break;
        case 'predict':
            break;
        case 'trainPredict':
            break;
        default:
            console.log('This option doesn\'t exist');
            process.exit(0);    
    }

    const app = require(`./${type}.js`);
    const result = await app(natural);

    // Show results
    switch(result.error) {
        case false:
            msgColor = "\x1b[32m";
            break;
        case true:
            msgColor = "\x1b[31m";
            break;
    }

    console.log(msgColor, result.msg);

    // Prediction measurement
    let res = {};
    if(type !== 'train') {
        res = measurement(result.msg);
        console.log(msgColor, "\n" , `Prediction measurement: ${res.perc}`);
    }

})(process.argv[2]);