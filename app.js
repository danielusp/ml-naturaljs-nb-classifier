const natural = require('natural');

(async (type = 'trainPredict') => {
    let msgColor = "";

    // Define module baser on user enter
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

    console.log(msgColor,result.msg);

})(process.argv[2]);