const fs = require('fs');

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
        const dataTraining = JSON.parse(fs.readFileSync('data/dataset-training.json'));

        dataTraining.forEach( item => {
            classifier.addDocument(item.text, item.class);
        });

        // Train
        await classifier.train();

        // Save the trained NLP
        classifier.save('data/nlp_trained.json', (err, classifier) => {
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