const { codeBooks, marketBooks} = require('./books');

function lowerPrice(nameList){
    let lowerPrice = 0;
    for (let current = 0; current < nameList.length;current++){
        if(nameList[current].price < nameList[lowerPrice].price){
            lowerPrice = current;
        }
    }
    return lowerPrice;
}

module.exports = lowerPrice;