const { codeBooks, marketBooks} = require('./books');


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

module.exports = mergeList;