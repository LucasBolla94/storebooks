const {codeBooks, marketBooks} = require('./books');

function sortYear(list){
    for(let i = 0; i < list.length; i++){
        let current = i;
        let prev = current - 1
        while(current > 0 && list[current].year < list[prev].year){
            let cheapestBook = list[current];
            let currentBook = list[prev];
            list[current] = currentBook;
            list[prev] = cheapestBook;
            current--
            prev = current - 1
        }
    }
    console.log('List by Year from Oldest to Newest')
    console.log(list)
}

module.exports = sortYear;