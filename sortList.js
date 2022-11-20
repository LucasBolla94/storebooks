const { codeBooks, marketBooks} = require('./books');

function sortList(list){
    for(let i = 0; i < list.length; i++){
        let current = i;
        let prev = current - 1
        while(current > 0 && list[current].price < list[prev].price){
            let cheapestBook = list[current];
            let currentBook = list[prev];
            list[current] = currentBook;
            list[prev] = cheapestBook;
            current--
            prev = current - 1
        }
    }
}

module.exports = sortList;