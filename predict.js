const fs = require('fs');
const config = require('./config');

/**
 * Predicts based on pre-trained file and testing set
 * 
 * @param {Object} natural  ML module
 * @return {Object}         Status of operation
 */
module.exports = natural => {
    return new Promise(async (resolve) => {
        // Prepare dataset
        const dataTesting = JSON.parse(fs.readFileSync(config.source.testing));

        // Load trained classifier
        natural.BayesClassifier.load(config.source.trained, null, async (err, classifier) => {
            if(err) {
                resolve({
                    error: true,
                    msg: 'Predicting error'
                });
            }

            const result = await predict(dataTesting, classifier);
            resolve({
                error: false,
                msg: result
            });
        });
    });
};

/**
 * Predicts for testing set
 * 
 * @param {Object} data 
 * @param {Object} classifier 
 * @return {Object}
 */
const predict = (data, classifier) => {
    return new Promise(resolve => {
        const result = data.map( item => {
            const classification = classifier.classify(item.text);

            return {
                text: item.text, 
                class: classification,
                prediction: classification === item.class? true : false
            };
            
        },[]);
        
        resolve(result);
    });
};