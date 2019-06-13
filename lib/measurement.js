// Prediction measurement

const sum = (data) => {
    let sum = {
        true: 0,
        false: 0
    };
    
    data.forEach( item => {
        if(item.prediction) {
            sum.true++;
        } else {
            sum.false++;
        }
    });

    return sum;
};

const perc = (sum, data) => {
    return ( sum.true / data.length );
};

module.exports = (data) => {
    const s = sum(data);
    const p = perc(s, data);

    return {
        sum: s,
        perc: p
    }
}