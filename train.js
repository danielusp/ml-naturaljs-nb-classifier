const fs = require('fs');
const config = require('./config');

/**
 * Train the NLP and save the training into a file
 * 
 * @param {Object} natural  ML module
 * @return {Object}         Status of operation
 */
module.exports = natural => {
    return new Promise(async (resolve) => {
        const classifier = new natural.BayesClassifier();

        // Prepare dataset
        const dataTraining = JSON.parse(fs.readFileSync(config.source.training));

        dataTraining.forEach( item => {
            classifier.addDocument(item.text, item.class);
        });

        // Train
        await classifier.train();

        // Save the trained NLP
        classifier.save('data/trained/nlp.trained.json', (err, classifier) => {
            if(err) {
                resolve({
                    error: true,
                    msg: 'Training error'
                });
            }
            
            resolve({
                error: false,
                msg: 'Training finished'
            });
        });

    });
};