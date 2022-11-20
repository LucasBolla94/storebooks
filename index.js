const sortYear = require('./sortByYear');
const { codeBooks, marketBooks} = require('./books');
const sortList = require('./sortList');
const mergeList = require('./mergeList');
const cheapest = require('./cheapest');

console.log(codeBooks);
console.log(marketBooks);

cheapest(codeBooks);
cheapest(marketBooks);

sortList(codeBooks);
sortList(marketBooks);
const newList = mergeList(codeBooks,marketBooks)
console.log(newList)

sortYear(newList)
sortList(newList)