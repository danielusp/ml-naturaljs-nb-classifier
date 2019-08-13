const fs = require('fs');
const config = require('./config');
const predict = require('./lib/predict');

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