// A
const nums = [10, 20, 30, 40, 50]
nums[4] = 99
console.log(nums)

// B
function getLastValue (array){
    lastIndex = array[array.length -1];
    console.log(lastIndex)
}

getLastValue([1, 20, 22, 24, 5]);
getLastValue(['hi', 'hello', 'good'])

// C

function arraySwap(array){
    if(array.length >= 2){
        let initial = array[0]
        array[0] = array[array.length -1]
        array[array.length -1] = initial
    }
}
let myArray = [1, 20, 22, 24, 5];
arraySwap(myArray)
console.log(myArray)

let strArray = ['hi', 'hello', 'good']
arraySwap(strArray)
console.log(strArray)

// D

for ( let i = 0; i <= 10; i+=2){
    console.log(i)
}

// E

for (let i = 5; i >= 0; i--) {
    console.log(i)
}

// F

let count = 0;

while (count <= 10){
    console.log(count)
    count+=2
}

let i = 5;

while (i >= 0){
    console.log(i)
    i--
}

// G

let arrayOfNumbers = [3,5,8,10,13,15]

let result = []

    for (let i = 0; i < arrayOfNumbers.length; i++){
        result.push(arrayOfNumbers[i] + 1)
        
    }
    console.log(result);

    // H

function addOne(array){
    for (let i = 0; i < array.length; i++) {
      result.push(array[i] + 1);
    }
    
}
console.log(result);
addOne(arrayOfNumbers)

// I


function addNum(arry, num){
    let increaseByNum = [];
    for (let i = 0; i < arry.length; i++){
        increaseByNum.push(arry[i] + num)
    }
    return increaseByNum;
}

console.log(addNum([1, 2, 3], 2));

// J

function addArray(array1, array2){
    let resulted = []
    for (let i = 0; i < array1.length; i++){
        resulted.push(array1[i] + array2[i]);
    }
   
    return resulted
}
console.log(addArray([1, 1, 2], [1, 1, 3]))
console.log(addArray([1, 2, 3], [4, 5, 6]));

// K

function countPositive(nums){
    let count = 0;
    for (let i = 0; i < nums.length; i++ ){
        if (nums[i] > 0){
            count++
        }
    }
    return count
}
console.log(countPositive([1, -3, 5]))

// Challenge

// L
let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

function minMax(nums){
    let min = nums[0]
    let max = nums[0]

    for (let i = 1; i < nums.length; i++){
        if (nums[i] < min){
            min = nums[i]
        }

        if (nums[i] > max){
            max = nums[i]
        }
        
    }
    console.log(`Min: ${min}, Max: ${max}`);
}

minMax(numbers)
minMax([-2, 3, -5, 7, 10])
minMax([])
minMax([3])


// N



// O and P

const stringArrays = ['hello', 'world', 'search', 'good', 'search']
for (let i = 0; i < stringArrays.length; i++){

    if (stringArrays[i] === 'search'){
        console.log(i)
        break;
    }
    else if (!stringArrays[i]=== 'search') {
        console.log(-1)
    }
}


// Q

function findIndex(array, word){
    for (i = 0; i < array.length; i++){
        if (array[i] === word){
            return i
        }
    }
    return -1
}
console.log(findIndex(['green', 'red', 'blue', 'red'], 'red'))

console.log(findIndex(["green", "red", "blue", "red"], "yellow"));

// R

// const removeEggs = ['egg', 'apple', 'egg', 'ham']
// let arrayRemoved = []
// function removeEgg(food){
//     for (i = 0; i < food.length; i++){
//         if (food[i] === 'egg'){
//             continue;
//         }
//         arrayRemoved.push(food[i])
        
//     }
//     return arrayRemoved
    
// }
// console.log(removeEgg(removeEggs))

// S

// const removeEggs = ["egg", "apple", "egg", "egg", "ham"];

// function removeEgg(food) {
//     let arrayRemoved = [];
//     let eggsRemoved = 0;
//     for (i = 0; i < food.length; i++) {
//         if (food[i] === 'egg' && eggsRemoved < 2) {
//             eggsRemoved++
//             continue;
//         }
//         arrayRemoved.push(food[i]);
//     }
//     return arrayRemoved;
// }
// console.log(removeEgg(removeEggs));


// T & U

const removeEggs = ["egg", "apple", "egg", "egg", "ham"];

function removeEgg(food) {
    const foodsCopy = food.slice()
    const reverseFood = foodsCopy.reverse()
    let arrayRemoved = [];
    let eggsRemoved = 0;
    for (i = 0; i < food.length; i++) {
        if (food[i] === "egg" && eggsRemoved < 2) {
        eggsRemoved++;
        continue;
        }
        arrayRemoved.push(food[i]);
    }
    return arrayRemoved.reverse();
}
console.log(removeEgg(removeEggs));
console.log(removeEggs)

// Challenge 
// V

for (let i = 0; i < 20; i++){
    console.log(i)
    if( (i % 3 === 0) && (i % 5 === 0)){
        console.log('FizzBuzz')
    }
    if(i % 3 === 0){
        console.log('Fizz')
    }
    if (i % 5 === 0){
        console.log('Buzz')
    }
}

// W

function findIndex(array, word) {
    for (i = 0; i < array.length; i++) {
        if (array[i] === word) {
        return i;
        }
    }
    return -1;
}
console.log(findIndex(["green", "red", "blue", "red"], "red"));

console.log(findIndex(["green", "red", "blue", "red"], "yellow"));

function unique(array){
    const checkArray = []
    for (let i = 0; i < array.length; i++){
        const word = array[i]

        if (findIndex(checkArray, word) === -1){
            checkArray.push(word);
        }
        
    }
    return checkArray
}
console.log(unique(["green", "red", "blue", "red"]));
console.log(unique(["red", "green", "green", "red"]));