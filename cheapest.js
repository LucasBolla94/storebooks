const { codeBooks, marketBooks} = require('./books'); // Import from Books.js

function findCheapest(list){
    let cheapest = 0;
    for(let current = 0;current < list.length;current++){
        if(list[current].price < list[cheapest].price){
            cheapest = current
        }
    }
    console.log(cheapest)
}

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

sortList(codeBooks)
sortList(marketBooks)

function mergeList(list1,list2){
    let indexBook1 = 0;
    let indexBook2 = 0;
    let newList = [];

    while(indexBook1 < list1.length && indexBook2 < list2.length){
        if(list1[indexBook1].price < list2[indexBook2].price){
            newList.push(list1[indexBook1])
            indexBook1++
        } else {
            newList.push(list2[indexBook2])
            indexBook2++
        }
    }
    if(indexBook1 < list1.length){
        for(indexBook1; indexBook1 < list1.length; indexBook1++){
            newList.push(list1[indexBook1])
        }
    }
    if(indexBook2 < list1.length){
        for(indexBook2; indexBook1 < list1.length; indexBook2++){
            newList.push(list1[indexBook2])
        }
    }
    return newList
}

let newList = mergeList(codeBooks,marketBooks)

console.log(newList)
console.log(`Length of OPA is ${newList.length}`)
