// let fruits = ['apple', 'mango', 'banana', 'tomato'] ;
// console.log(fruits)

// let arr = new Array(1, 2, 3) ;
// console.log(arr) ;

// let arr2 = Array.of("a", "b") ;
// console.log(arr2) ;

// let mixedArray = ['apple', 'mango', 2, 4, 5, true, {name:"mike"}, [5, 6, 7]] ;
// console.log(mixedArray) ;

// let nestedArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];
// console.log(nestedArray[0][0]) ;
// console.log(nestedArray[1][0]) ;
// console.log(nestedArray[2][0]) ;

// let fruits2 = ['apple', 'mango', 'banana', 'tomato'] ;
// // fruits2.push('cherry');
// // console.log(fruits2);
// // fruits2.unshift('grape');
// console.log(fruits2);
// // fruits2.pop()
// // console.log(fruits2);
// // fruits2.shift()
// // console.log(fruits2);

// fruits2.pop(1, 1);
// console.log(fruits2);

// fruits2.splice(2, 1, 'kiwi')
// console.log(fruits2);

let fruits = ['apple', 'mango', 'banana', 'tomato'] ;
console.log(fruits)
fruits.forEach(function(fruits){
    console.log(fruits)
})

let upperFruits = fruits.map(fruits =>fruits.toLocaleUpperCase());
console.log(upperFruits);

let numbers = [1, 2, 3, 4, 5, 6]
console.log(numbers)
let squares = numbers.map(num => num * num);
console.log(squares)