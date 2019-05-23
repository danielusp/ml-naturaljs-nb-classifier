const fs = require('fs');

/**
 * Train and predict in one flux
 */
module.exports = async (natural) => {
    const classifier = new natural.BayesClassifier();

    // Prepare dataset
    const dataTraining = JSON.parse(fs.readFileSync('data/dataset-training.json'));
    const dataTesting = JSON.parse(fs.readFileSync('data/dataset-testing.json'));

    dataTraining.forEach( item => {
        classifier.addDocument(item.text, item.class);
    });

    // Train
    await classifier.train();

    // Predict from testing dataset
    const result = dataTesting.map( item => {
        return {
            text: item.text, 
            class: classifier.classify(item.text)
        };

    },[]);

    return {
        error: false,
        msg: result
    };
};