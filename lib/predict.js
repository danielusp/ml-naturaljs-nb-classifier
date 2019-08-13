/**
 * Predicts for testing set
 * 
 * @param {Object} data 
 * @param {Object} classifier 
 * @return {Object}
 */
module.exports = (data, classifier) => {
    return new Promise(resolve => {
        const result = data.map( item => {
            const classification = classifier.classify(item.text);

            return {
                text: item.text, 
                class: item.class,
                prediction: classification,
                isCorrect: classification === item.class? true : false
            };
            
        },[]);
        
        resolve(result);
    });
};