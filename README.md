# NLP Naive Bayes Classifier with natural.js

NLP classifier based on Naive Bayes

## How to install

```
npm install
```

## Data Input

Array of objects

Example:

```
[
    {
        text: 'some text',
        class: 'class name'
    },
    ....
]
```
NLP classifier going to train the 'text' propertie with 'class'

After training the predictor is going to guess if a 'text' is related with 'class'

## How to use

Run the complete process: train and predict
```
npm start
```

Just train and save the training into a file
```
npm run train
```

Just predict based on training file and testing data set

```
npm run predict
```

## Output

- Dataset testing list with predictions
- Prediction measurement (between 0 and 1)

## Data Set

Training data set in ***data/dataset-training.json*** file

Testing data set in ***data/dataset-testing.json*** file

Trained NLP in ***data/npl_trained.json*** file