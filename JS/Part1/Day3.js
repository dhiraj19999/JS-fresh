

//  Callback function
// it is a function that is passed as an argument to another function
//  example

/*
A callback function is a function that is passed as an argument to another function and is 
executed after the completion of some operations.
Callbacks are widely used in

API requests (fetching data)
Reading files (Node.js file system)
Event listeners (clicks, keyboard inputs)
Database queries (retrieving data)
Callbacks in Event Listeners
JavaScript is event-driven, and callbacks handle user interactions like clicks and key presses.


document.getElementById("myButton").addEventListener("click", function () {
    console.log("Button clicked!");
});

Problems with Callbacks



1. Callback Hell (Nested Callbacks)
When callbacks are nested deeply, the code becomes unreadable and hard to maintain

Alternatives to Callbacks
1. Promises (Fixing Callback Hell)
Promises provide a better way to handle asynchronous tasks without deep nesting.

When to Use and Avoid Callbacks?
Use callbacks when

Handling asynchronous tasks (API calls, file reading).
Implementing event-driven programming.
Creating higher-order functions.
Avoid callbacks when

Code becomes nested and unreadable (use Promises or async/await).
You need error handling in asynchronous operations (Promises are better).
*/
 
function greet(name, callback) {

    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    console.log('I am callback function');
}
     
// passing function as an argument
greet('Aman', callMe);
   

// function returning another function
function greet() {
    console.log('Hello');
    return function () {
        console.log('Good Morning');
    }
}

// calling function that returns a function
greet()();// Hello Good Morning


  
//   Array methods 
// Array methods are functions built-in to JavaScript that we can apply to our arrays 
//  higher-order functions means functions that take other functions as arguments or 
// return functions as their results.
//  


// 1. forEach()
//  it is used to iterate over an array and perform some operation on each element.
//  it takes a callback function as an argument and executes it on each element of the array.
//  The forEach() method does not return anything.
// It does not return a new array and does not mutate the original array, unless you modify the elements directly.
//  example

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (element, index, array) {
    console.log(index);// 0 1 2 3 4
    
    console.log(element);
});

let arr = [1, 2, 3];

arr.forEach((num, index, array) => {
    array[index] = num * 2; // This modifies the original array  becuz of element modification
});

console.log(arr); // Output: [2, 4, 6]



// 2. map()

// The map() method creates a new array by calling a callback function on each element of the input array.
//  The map() method does not change the original array., but  If you modify elements inside it can modify the original array.
// map returns a new array of the same length with the modified elements.
// map me kuch retrun nahi kiya to by default undefined return krega
// example

const numbers = [1, 2, 3, 4, 5];

const double = numbers.map(function (element,index, array) {
    return element * 2;
}
);

console.log(double);// [2, 4, 6, 8, 10]



// 3. filter()
// The filter() method creates a new array with all the elements that pass the test implemented by the callback function.
// The filter() method does not change the original array.
// The filter method in JavaScript does not modify the original array. Instead, it creates and 
// returns a new array containing only the elements that satisfy a given condition.
// When to Use filter:
//When you need to select certain elements from an array based on a condition.
// When you want a new array without modifying the original one.


// example

let arr2 = [1, 2, 3, 4, 5, 6];

let evenNumbers = arr2.filter(num => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4, 6]
console.log(arr);         // Output: [1, 2, 3, 4, 5, 6] (Unchanged)

     
         //  reduce

         /*
The JavaScript Array.reduce() method iterates over an array, applying a reducer function to each element, 
accumulating a single output value. It takes an initial value and processes elements from left to right, 
reducing the array to a single result. It is useful for doing operations like max in an array, min in an 
array and sum of array

This method accepts five parameters as mentioned above and described below:


function(total, currentValue, index, arr): It is the required parameter and is used to run for each element
 of the array. It contains four parameters which are listed below:
initialValue: It is an optional parameter and is used to specify the value to be passed to the function as
 the initial value.
 
 Parameter Name	                 Description	                                        Required/Optional
total	             Specifies the initial value or previously returned value of the function	  Required
currentValue	Specifies the value of the current element	                          Required
currentIndex	Specifies the array index of the current element	                Optional
arr	                  Specifies the array object the current element belongs to	                    Optional








         */

     const num=[1,2,3,4,5]
     
     const sum=num.reduce((accumulator,currentValue)=>{
         return accumulator+currentValue
     })



     //   accumulator        currentvalue        return
     //        1                  2                 3
     //        3                  3                 6
     //         6                  4                 10
     //          10              5                   15
     //          15               6                  21




     const num3=[1,2,3,4,5]
     
     const sum1=num.reduce((accumulator,currentValue)=>{
         return accumulator+currentValue
     },10) //  here we add 10 as a intial value




     // sort 
     //  it mutate means change the original array
const newnum=[2,6,5,9,8,]
// js array ko as a string sort kr raha hai like ["2","6","5","9,"8"] depend on asci value
newnum.sort((a,b)=>{
    return a-b;// ascending
    // if a-b is positive =9-8=1 greatr than 0 then b come to first place then a if it negative then 
    // first is a then b
    // it return modified array=[2,5,6,8,9]
})

// Create an Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Sort the Array
fruits.sort();//  here it sort on alphabetical orders

// find method
// The find() method does not change the original array.
// The find() method returns the value of the first element that passes a test.


const myArray=["Hello","cat","dog"]

let x=myArray.find((el)=>{

    return el=="Hello"
})

console.log(x)// hello



// Every method
let y=newnum.every((num)=>{

    return  num%2===0
    // it rertun true or false
  })
    
  console.log(y)// false

  //  The every() method returns true if the function returns true for all elements.

//The every() method returns false if the function returns false for one element.

//The every() method does not change the original array




// splice

const itemarry=["item1","item2","item3"]
// start , delete, insert
//itemarry.splice(1,1)
// return change original array=["item1,item3"]

itemarry.splice(1,0,"insert")

// it change original array to ["item1","insert",item2","item3"]
//The splice() method adds and/or removes array elements.

//The splice() method overwrites the original array.

// some

// The some() method returns true (and stops) if the function returns true for one of the array elements.

//The some() method returns false if the function returns false for all of the array elements.


const ages = [3, 10, 18, 20];

const z=ages.some((el)=>el>18);
console.log(z)// true

// fill method

const myArray= new Array(5).fill(8)

console.log(myArray) // [ 8, 8, 8, 8, 8 ]

//The fill() method fills specified elements in an array with a value.

//The fill() method overwrites the original array.

//Start and end position can be specified. If not, all elements will be filled.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi", 2, 4);

// last index not include ie last index-1
//console.log(fruits)// [ 'Banana', 'Orange', 'Kiwi', 'Kiwi' ]


fruits.fill("Kiwi", 2, 3); // [ 'Banana', 'Orange', 'Kiwi', 'Mango' ]




// itrables means jispe hum for of loop laga skenin
// obj itrable nahi hote array and string itrble hote hai
// array like obj means jinke pass length proeprty hoti hai aur jisko hum index se accsess
// kr skte hai example= string



//  SETS
/*
stes are itrable , store data, set also have its own data, no index based accsess
order is not guaranteed
unique item only (no duplicates aalowed)

*/

const digit=new Set([1,2,3]) // duplicate not allowed
digit.add(4)
digit.add(4)
// it dose not add 4 again becuses it makes duplicasy
digit.add([1,2])
digit.add([1,2])
// both get added Set(6) {1,2,3,4,Array(2),Array(2)} beuse both array has differnt memory address so no 
// duplicasy
// length property nahi use kr skte
if (digit.has(1)){
    console.log("yes");
}

for(let number of digit){
    console.log(number);


}

const diff=[1,2,3,3,3,4,4,5,6]
const uniqueElemnts=new Set(diff)

console.log(uniqueElemnts)// [1,2,3,4,5,6];


