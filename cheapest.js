const { codeBooks, marketBooks} = require('./books'); // Import from Books.js

function findCheapest(list){
    let cheapest = 0;
    for(let current = 0;current < list.length;current++){
        if(list[current].price < list[cheapest].price){
            cheapest = current
        }
    }
    console.log(`The Book Cheapest is ${list[cheapest].name}`)
}

module.exports = findCheapest;