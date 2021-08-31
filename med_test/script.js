'use strict';

const arr = [
    [1,2,3,4,5,6],
    [1,2,3,5,7,9],
    [1,2,3,4,5,5,5],
    [10,5,0,-5,-7,-9,-10,-11],
    [5, 4, 3, 2, 1, 2, 3, 4, 3, 2, 1, 2, 4, 5, 6]
];

function generator(num){
    let newArr = []
    for(let i = 1; i <= num;i++){
        newArr.push(2)
    }
    arr.push(newArr)
}
generator(1000);
generator(1000000);


arr.forEach(item => listArray(item));

function listArray(arrItem) {
    let count = 0;
    let start = performance.now()


    for(let i = 0;i <= arrItem.length - 3;i++){
        for(let j = 3; j <= arrItem.length - i;j++){
            if(checkElem(arrItem.slice(i, i+ j))) {
                count++;
                if(count % 150000 === 0) {
                    console.log(count);
                }
            }
        }
    }
    
    function checkElem(item){
        for(let i = 1; i < item.length - 1;i++){
            if((item[i] - item[i - 1]) !== (item[i + 1] - item[i])){
                return false;
            }
        }
        return true;
    }
    let finish = performance.now();
    
    console.log(arrItem);
    console.log(`perfomance:  ${(finish - start).toFixed(3)}ms`);
    console.log(`count of combinations - ${count}`);
    console.log('=======================================================');
}
