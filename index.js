const R = require('ramda');

const fruitObject = [{fruit: 'apples'}, {fruit: 'grapes'}, {fruit: 'peaches'}];

const apples = R.find(R.propEq('apples', 'fruit'))(fruitObject);

console.log('apples:', apples);

const nestedData = [
    [ 'apples', ['apples']], 
    ['peaches'], 
    ['mangos'], 
    [ 'grapes', ['kiwis',['apples']]]
]

const flattenedData = R.flatten(nestedData);

console.log('flattenedData:', flattenedData);

console.log('includes apples:', R.includes('apples', flattenedData));
console.log('includes bananas:', R.includes('bananas', flattenedData));

const fruitObjects = {1: 'apples', 2: 'mangos', 3: 'peaches', 4: 'apples', 5: 'raspberries'}

const getApples = (data) => {
    const fruitValues = R.values(data);
    return R.filter(fruit => fruit === 'apples', fruitValues);
}

console.log('just apples:', getApples(fruitObjects));

const addFruit = (fruitName, data, index) => R.insert(index, fruitName, data);

const fruitList = ['apples', 'peaches', 'mangos'];

const withBlueberries = addFruit('blueberries', fruitList, 1);
console.log('add blueberrries:', withBlueberries);

const withRaspberries = addFruit('raspberries', fruitList, 2);
console.log('add blueberrries:', withRaspberries);



