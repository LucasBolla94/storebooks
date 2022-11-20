const {codeBooks, marketBooks} = require('./books');

function sortYear(list){
    let checking = 0;

    for(let current = 0; current < list.length;current++){
        let prev = checking - 1;
        console.log(`prev${prev}`)
        while(prev >= 0 && list[checking].year < list[prev].year){
            let currentBook = list[prev];
            let prevBook = list[checking];
            console.log(`Book Newest ${list[checking].name} change for ${list[prev].name}`)

            list[checking] = currentBook;
            list[prev] = prevBook;
            checking--
        }
        
        console.log(`checking${checking}`)
        checking++
    }
}
console.log(marketBooks)
console.log('--------------------------------------------------------------')
sortYear(marketBooks)
console.log(marketBooks)




// function sortListYear(list1, list2){
//     let finalList = [];
//     let currentList1 = 0;
//     let currentList2 = 0;

//     while(currentList1 < list1.length && currentList2 < list2.length){
//         if(list1[currentList1].year > list2[currentList2].year){
//             finalList.push(list1[currentList1]);
//             console.log(list1[currentList1])
//             console.log(`while list 1 ${currentList1}`)
//             currentList1++
//         } else {
//             finalList.push(list2[currentList2])
//             console.log(list2[currentList2])
//             console.log(`while list 2 ${currentList2}`)
//             currentList2++
//         }
//     }    console.log(`List Classified by Year:`)
//     console.log(finalList)
// }
// }