const { codeBooks, marketBooks} = require('./books');
const lowerPrice = require('./lowerPrice');
let finalList = [];

function mergeList(list1, list2){
    
    let currentPosition1 = 0;
    let currentPosition2 = 0;
    
    while(currentPosition1 < list1.length && currentPosition2 < list2.length){
        let currentProduct1 = list1[currentPosition1];
        let currentProduct2 = list2[currentPosition2];
        if(currentPosition1.price < currentPosition2.price){
            finalList.push(currentProduct1)
            currentPosition1++
        } else {
            finalList.push(currentProduct2)
            currentPosition2++
        }
    }
    if(currentPosition1 > 0 || currentPosition2 > 0){
        0
    }

}

mergeList(codeBooks,marketBooks)
console.log(finalList)