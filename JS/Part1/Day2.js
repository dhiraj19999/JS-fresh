//  While  Loop


/* 
    Syntax:
    while (condition) {
        // code block to be executed
    }
        while loop is used to execute a block of code multiple times as long as the condition is true.
        The condition is evaluated before executing the code block.

*/

// Example
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
// prints 0 1 2 3 4

/* For loop 
 it is used to execute a block of code a number of times.
    Syntax:
        for (initialization; condition; increment) {
            // code block to be executed
        }

*/
 
// Example
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// prints 0 1 2 3 4

/* BREAK VS CONTINUE
    Break is used to break the loop and continue is used to skip the current iteration and continue with the next iteration.
*/

// Example
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}
// prints 0 1 2

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}
// prints 0 1 2 4

// 23. Do while loop
// Syntax:
// do {
//     // code block to be executed
//   }
//   while (condition);
// do while loop is used to execute a block of code at least once, and then the condition is evaluated.

// Example
let i = 0;
do {
    console.log(i);
    i++;
}
while (i < 5);
// prints 0 1 2 3 4

// Array
/* 
   Its is data structure that stores a collection of elements.
    Array is a collection of elements of the same type or different types.
    Syntax:
    let arrayName = [element1, element2, element3, ...];
    it is mutable i.e. we can change the elements of the array.
     
*/
 
// Example
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]); // Apple
 fruits[0] = "Orange";
console.log(fruits[0]); // Orange
 // type of array is object
console.log(typeof fruits); // object

Array.isArray(fruits); // true

// 25. Array methods : it is used to perform operations on the array.
// push() method is used to add elements to the end of the array.
let fruits = ["Apple", "Banana"];
fruits.push("Mango");
console.log(fruits); // ["Apple", "Banana", "Mango"]
 
// pop() method is used to remove the last element from the array.
let fruits = ["Apple", "Banana", "Mango"];
fruits.pop(); // it returns the removed element
console.log(fruits); // ["Apple", "Banana"]

// shift() method is used to remove the first element from the array.
let fruits = ["Apple", "Banana", "Mango"];
fruits.shift(); // it returns the removed element

console.log(fruits); // ["Banana", "Mango"]
 
// unshift() method is used to add elements to the beginning of the array.
let fruits = ["Apple", "Banana"];
fruits.unshift("Mango");
console.log(fruits); // ["Mango", "Apple", "Banana"]

/* Primitive vs Reference data types
    Primitive data types are immutable i.e. we cannot change the value of the data type.
    Reference data types are mutable i.e. we can change the value of the data type.
   examples of  primitive data types are number, string, boolean, null, undefined, symbol.
   examples of reference data types are object, array, function.
primitive data types stored values in stack memory
reference data types stored memory address in stack memory and values in heap memory
heap-memory=> it is used to store the values of the reference data types.
stack-memory=> it is used to store the memory address of the reference data types.

*/
 
// Example
let num1 = 10;
let num2 = num1;
num1 = 20
console.log(num1); // 20
console.log(num2); // 10

// refernce data type
let arr1 = [1, 2, 3];
let arr2 = arr1;// yaha arr ek hi hai but 2 varibles arr1 and arr2 are refering to the same memory location
arr1[0] = 10;
let arr3=[1,2,3];
console.log(arr1); // [10, 2, 3]
console.log(arr2); // [10, 2, 3]
console.log(arr1===arr2); // true
console.log(arr1===arr3); // false because they are not refering to the same memory location
  /*

primitives directly stores the value like differnt varible takes differnt space in memeory
thats why there is no direct change in varibles in case of primitive we have to seprtlye
change the values of each varibles
but in case of refernce type for example arr does not store value it just store the 
memory address or refrnce for that value so when we make change in arr1 then there is change 
in value and arr2 also have the same memory addres which arr1 have so the value of arr2 get 
changed becuse both arrs refred to the same memory location



*/

// Clone an array
let arrs1=["mao","chao"]

let arrs4=arrs1.slice(0)// 0 se end tak ka sare  elemnts ka new array banega
 let arrs5=[].concat(arrs1) // concat se bhi new array banega
    let arrs6=[...arrs1] // spread operator se bhi new array banega


    //  use const for creating array
    const arrs7=[1,2,3]
    arrs7.push(4)
    console.log(arrs7) // [1,2,3,4]
    // const array is mutable but we can not reassign the array
    // const array is used to prevent the reassigning of the array
    // but we can change the elements of the array
    arrs7={name:"mao"} // error
    arrs7[0]=10 // valid
    console.log(arrs7) // [10,2,3,4]

    const na=["name","maps"]

na.push("change")

// it prints    ["name","maps","change"]
// becuse we here try to add value not to change its address

// whenevr we try to change data type of const array then it gives error like for example
 // const na=["name","maps"] // it has some address in memory 
 //  na={  }// here we try to change the address of the array so it gives error

// na=["grapes"]  // here gives error becuse here we try to reassign the value change arr completely, 
// becuz we reassign the new array that is change in address of the array so it gives error that is not possible
//  in case of const array , in short refrence of the array can not be changed in case of const array
//  but we can change the elements of the array, as in primitve data type we can not change the value of 
// the varible in case of const varible becuz it stores the value directly in memory but in case of array
// it stores the memory address of the array so we can change the elements of the array but we can not
// reassign the array tht is memory address  in case of const array


//  for of loop is used to iterate over the elements of the array
// Example
let fruits = ["Apple", "Banana", "Mango"];
for (let fruit of fruits) {
    console.log(fruit);
}
// prints Apple Banana Mango

// for in loop is used to iterate over the keys of the array
// Example
let fruits = ["Apple", "Banana", "Mango"];
for (let index in fruits) {
    console.log(index);
    console.log(fruits[index]);// it prints the value of the array  
}
// prints 0 1 2



// 30.  Array destructuring
// Array destructuring is used to unpack the values from the array.
// Example
let fruits = ["Apple", "Banana", "Mango"];
let [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1); // Apple
// array destructring is based on the index of the array
// we can also skip the elements of the array
let [fruit1, , fruit3] = fruits;
console.log(fruit3); // Mango
[fruit1, ...allfruits]=fruits
console.log(allfruits) // it prints ["Banana","Mango"]
// we can also use the rest operator to get the remaining elements of the array


//  31.  Spread operator
// Spread operator is used to unpack the elements of the array.
// Example
let fruits = ["Apple", "Banana", "Mango"];
let allfruits = [...fruits];
console.log(allfruits); // ["Apple", "Banana", "Mango"]
// we can also use the spread operator to combine the arrays
let fruits = ["Apple", "Banana"];
let fruits2 = ["Mango", "Orange"];
let allfruits = [...fruits, ...fruits2];
console.log(allfruits); // ["Apple", "Banana", "Mango", "Orange"]



// 32.  Object
// Object is a collection of key-value pairs.
// Syntax:
// let objectName = { key1: value1, key2: value2, ... };
// it is mutable i.e. we can change the values of the object.
// Example
let person = {
    name: "John",
    age: 20,
    isAdult: true
};
console.log(person.name); // John
// type of object is object
console.log(typeof person); // object
// we can add new key-value pairs to
// the object
person.city = "New York";
console.log(person.city); // New York
// we can also delete the key-value pairs
delete person.city;
console.log(person.city); // undefined
// we can also use the square brackets to access the key-value pairs
console.log(person["name"]); // John
// we can also use the square brackets to add the key-value pairs
person["city"] = "New York";
console.log(person.city); // New York
// we can also use the square brackets to delete the key-value pairs
delete person["city"];
console.log(person.city); // undefined
// it is reference data type

let obj2 = { name: "John" };
let obj1={name:"John"}



console.log(obj1===obj2) // false becuse they are not refering to the same memory location


const key="email"
let person={

    name:"dhiraj",
    age:24,
    "person hobby":["play","sing"]
}

console.log(person["person hobby"][0]);

person[key]="dhirajagarad50"// becuz dot notation does not accept string as key so we use square brackets 



// for in loop is used to iterate over the keys of the object
// Example
let person = {
    name: "John",
    age: 20
};
for (let key in person) {
    console.log(key); // name age
    console.log(person[key]); // John 20
}

console.log(Object.keys(person)) // ["name","age"]
console.log(Object.values(person)) // ["John",20]
console.log(Object.entries(person)) // [["name","John"],["age",20]]



const spre=[..."abcd"] // it spreds "a","b","c","d" in the array

//  spread operator in object
let obj1 = { name: "John" };
let obj2 = { age: 20 };
let obj3 = { ...obj1, ...obj2 };
console.log(obj3); // { name: "John", age: 20 }
// we can also use the spread operator to add new key-value pairs
let obj4 = { ...obj3, city: "New York" };
console.log(obj4); // { name: "John", age: 20, city: "New York" }
// we can also use the spread operator to delete the key-value pairs
let { city, ...rest } = obj4;
console.log(rest); // { name: "John", age: 20 }
// we can also use the spread operator to clone the object
let obj5 = { ...obj4 }; 
console.log(obj5); // { name: "John", age: 20, city: "New York" }
console.log(obj4===obj5) // false becuse they are not refering to the same memory location
// object destructuring based on the key of the object

const obj7={..."BCD"}
console.log(obj7) // it prints {0:"B",1:"C",2:"D"}
const obj8={...[1,2,3]}
console.log(obj8) // it prints {0:1,1:2,2:3}
const obj9={...{name:"dhiraj",age:24}}
console.log(obj9) // it prints {name:"dhiraj",age:24}
const obj10={...true}
console.log(obj10) // it prints {}
const obj11={...null}
console.log(obj11) // it prints {}
const obj12={...undefined}
console.log(obj12) // it prints {}

let band={nam:"coldplay",song:"yellow"}
let {nam,song}=band
nam="dhiraj"
console.log(nam)//  it prints dhiraj
const {nam,song}=band
nam="dhiraj"
console.log(nam)//  it prints error becuse we can not change the value of the const varible

let band2={nam:"coldplay",song:"yellow",album:"parachutes"}
let {nam,...rest}=band2
console.log(rest) // it prints {song:"yellow",album:"parachutes"}

let {nam:bandname,song:bandsong}=band2
console.log(bandname) // it prints coldplay,  here we change the key name of the object
console.log(nam) // it prints error becuse nam is not defined


// Nested destructuring
let person = {
    name: "John",
    age: 20,
    address: {
        city: "New York",
        country: "USA"
    }
};

let { name, address: { city, country } } = person;
console.log(name); // John
console.log(city); // New York


const users=[
    {userId:1,firstName:"hasrhit",gender:"male"},
    {userId:2,firstName:"sujit",gender:"male"},
    {userId:3,firstName:"rajat",gender:"male"}
]

const [{firstname:user1firstname,userId},,{gender:user3gender}]=users // object desrtuctring inside 
// the array destructring

console.log(user1firstname)//prints harshit 
console.log(userId);// prints 1
console.log(user3gender);// prints userid3's gender



/*

Primitive data types are immutable, meaning their values cannot be changed once assigned. 
Non-primitive data types are mutable and can be modified.

JavaScript is a dynamically typed language, which means that data types of variables are determined by
 the value they hold at runtime and can change throughout the program as we assign different values to 
 them.

 undefined means a variable has been declared but has not yet been assigned a value, whereas null is an 
 assignment value, meaning that a variable has been declared and given the value of null
 null means empty value;

  log(typeOf(undefined)) == gives undefined
  log(typeOf(null)) == gives object
 */







// 33.  Functions
// Function is a block of code that performs a specific task.





function one (){

    let user="dhiraj"
  
     function two(){
  
      let website="portfolio"
  
      console.log(user);// it prints dhiraj becuse function two have function one as a global scope
     }
  two()
    console.log(website); // it prints website is not defined becuse website is in function two scope
  }
  
  one();


  //  function declaration vs function expression
    // function declaration
    function fun1() {
        return 1;
    }
    // function expression
    const fun3 = function() {
        return 2;
    };

    const value=fun3() // it return 2
    // function declaration is used to declare the function.

    // function expression  
    // function expression is used to assign the function to a variable.


    /*

    A function declaration must have a function name.	
    A function expression is similar to a function declaration without the function name.
     he function in function declaration can be accessed before and after the function definition.	
     The function in function expression can be accessed only after the function definition.
     Function declarations are hoisted	
     Function expressions are not hoisted
        */




     fun1();// it return 1;

     function fun1(){
     
        return 1;   
     }
     
     fun2()// it gives error that cannot accss fun2 before intlisation becuse we declare function in varible
     const fun2=function nam() {
         return 3
     }
    
     

     //  Arrow function
        // Arrow function is a shorter syntax for writing the function.
     
        // Example
        const fun4 = () => {
            return 1;
        };
        // we can also remove the curly braces and return keyword
        const fun5 = () => 1;
        // we can also pass the arguments to the arrow function
        const fun6 = (a, b) => a + b;
        
        //  Arrow function vs function expression
        // Arrow function is a shorter syntax for writing the function.
        // Arrow function does not have its own this keyword.
        // Arrow function does not have arguments object.
        // Arrow function cannot be used as a constructor.
        // Arrow function cannot be used as a generator function.
        // Arrow function cannot be used as a method.
        // Arrow function cannot be used as a getter or setter.
        // Arrow function cannot call itself.
        // Arrow function cannot be hoisted.
        // Arrow function cannot be used as a callback function.
        // Arrow function cannot be used as an event handler.
        // Arrow function cannot be used as a prototype method.
       
        // Arrow function cannot be used as a property of an object.


//In regular functions, this refers to the object that calls the function (runtime binding). 
// Its value can vary based on how the function is called (method, event, or global).
//  In this regular function, this refers to the calling object obj. Output will be the name property.




const obj = {
    name: 'Geeks',
    greet: function() {
        console.log(this.name);
    }
};
obj.greet();  // it prints Geeks


// In this arrow function, this refers to the global object. Output will be undefined.
// Arrow functions inherit this from the outer scope, not the object itself, causing this.name to be undefined.
// Arrow functions do not have their own this binding, so this refers to the global object, 
// which does not have a name property.

const obj = {
    name: 'Geeks',
    greet: () => {
        console.log(this.name);
    }
};
obj.greet(); // it prints undefined



//Hoisting in Arrow functions
//Arrow functions are not hoisted like regular function declarations. They are treated as variables, 
// so they cannot be called before being defined due to the temporal dead zone.

//Example: Arrow functions are not hoisted like regular functions. Calling greet before its 
// declaration results in a ReferenceError due to the temporal dead zone.




greet(); // ReferenceError: Cannot access 'greet' before initialization

const greet = () => {
    console.log('Hello!');
};
//Output: ReferenceError: Cannot access 'greet' before initialization



//  Function inside function =>>  closure
/*

A closure in JavaScript is a function that has access to the variables and parameters of its outer function,
 even after the outer function has finished executing. Closures are created when a function is defined within
  another function. 



  */
// A closure is a function inside another function that has access to the outer function's variables.
// Example
function outer() {
    let name = "John";
    function inner() {
        console.log(name);// inner fun pahle apne local scope me name varible check kregi and then lexical scope me 
        // that is outer fun me name varible check kregi becuz inner and outer fun chained lexically
    }
    inner();
}
outer(); // it prints John
// inner function has access to the outer function's variables  
// inner function is a closure
// inner function has access to the outer function's variables even after the outer function has returned.
 // example
function outer() {
    let name = "John";
    function inner() {
        console.log(name);
    }
    return inner;
}
let innerFn = outer();
innerFn(); // it prints John
  // but outer function does not have access to the inner function's variables
   

//  What is lexical scope
/*


Lexical scope is a fundamental concept in programming that determines the accessibility of variables and
 functions based on where they are defined in the source code. In simple terms, lexical scope is the scope 
 of a variable or function determined at compile time by its physical location in the code. 
 Unlike dynamic scope, which depends on how functions are called at runtime, lexical scope is static
  and remains the same throughout the program’s execution.

Lexical scope defines the accessibility of variables and functions depending on their location in the 
source code. 

*/



function outerFunction() {
    const outerVar = 'I am from the outer function';
  
    function innerFunction() {
      const innerVar = 'I am from the inner function';
      console.log(outerVar); // Output: I am from the outer function
    }
  
    innerFunction();
  }
  
  outerFunction();

  /*

Lexical scope defines the accessibility and visibility of variables based on their location in the code's 
nested functions. Closures are functions that have access to variables in their outer function scope, even 
after the outer function has returned.
In this example, outerFunction() contains an inner function called innerFunction(). The variable outerVar is 
defined inside outerFunction(), and innerVar is defined inside innerFunction(). innerFunction() can access 
the outerVar variable because it’s defined in the outer function’s lexical scope. 
However, the outerFunction() cannot access innerVar because it’s defined inside the inner function’s lexical 
scope.
a closure is a function that has access to variables in its outer (enclosing) function scope, 
even after the outer function has returned. Closures are created every time a function is defined in 
JavaScript, and they are used to create private variables and methods.

*/






   //  Scope
   /*

Global Scope: Variables defined outside any function or block, accessible anywhere in the program.
Local Scope: Variables defined inside a function or block, accessible only within that specific function or block.
Nested Scope: Inner functions have access to variables in their parent functions.
Block Scope: Variables defined with let and const are limited to the block they are declared in, 
like loops or conditionals.



Global Scope
When a variable is defined outside of any functions or blocks, it has a global scope. 
This means that it can be accessed from anywhere within the program, including within functions.

Local Scope
When a variable is defined within a function or block, it has a local scope. This means that it can only be 
accessed within that function or block.

Nested Scope
When a function is defined within another function, 
it has access to variables defined in the parent function. This is known as nested scope.
Block Scope
ES6 introduced the let and const keywords, which allow variables to have block scope. This means that 
variables defined within a block of code (such as within an if statement or a for loop) can only be 
accessed within that block.




   */

// example of global scope
let name = "John"; // Global variable

function sayHello() {
      console.log("Hello " + name);
}

sayHello(); // Output: "Hello John"


// example of local scope

function sayHello() {
    let name = "John"; // Local variable

    console.log("Hello " + name);
}

sayHello(); // Output: "Hello John"

console.log(name); 
// Output: Uncaught ReferenceError: name is not defined



// example of nested scope

function outer() {
    let name = "John"; // Outer function variable

    function inner() {
        console.log("Hello " + name);
    }

    inner(); // Output: "Hello John"
}

outer();


function sayHello() {
    let name = "John"; // Function variable

    if (true) {
        let message = "Hello"; // Block variable
        console.log(message + " " + name); 
        // Output: "Hello John"
    }

    console.log(message); 
    // Output: Uncaught ReferenceError: 
    // message is not defined
}

sayHello();



{
    let a=10;
    const b=20
    var c=30;
}

 console.log(a) //  a is not defined
 console.log(b) //  b is not defined
 console.log(c) //  it prints 30 becuse var is function scope and it is not block scope

 // let vs var vs const
    // var is function scope    
    // let and const are block scope
    // var can be hoisted
    // let and const cannot be hoisted
    // var can be redeclared
    // let and const cannot be redeclared
    // let can be reassigned
    // const cannot be reassigned
    // const must be initialized during declaration
    // let can be initialized later
    // var is not recommended to use
    // let and const are recommended to use
    // const is used when the value of the variable does not change
    // let is used when the value of the variable changes
    // var is used when we want to use the variable globally
    // let and const are used when we want to use the variable locally

    function hello(){
       let x=10
         var y=20
            const z=30

    }

    console.log(x) // x is not defined
    console.log(y) // y is not defined becuse var is function scope
    console.log(z) // z is not defined



    //  Default parameters
    // Default parameters are used to assign default values to the parameters of the function.
    // Example
    function greet(name = "John") {
        console.log("Hello " + name);
    }
    greet(); // Output: "Hello John"
    greet("Mike"); // Output: "Hello Mike"

    //  Rest parameters
    // Rest parameters are used to pass a variable number of arguments to the function.
    //This feature is used to pass an unlimited number of arguments to a function, and the rest parameter 
    // allows us to access the arguments as an array.
    // Example
    function sum(...args) {
        let result = 0;
        console.log(args); // Output: [1, 2, 3]
        for (let arg of args) {
            result += arg;
        }
        return result;
    }
    console.log(sum(1, 2, 3)); // Output: 6
    console.log(sum(1, 2, 3, 4, 5)); // Output: 15


    // Param destructuring
    // Param destructuring is used to unpack the values from the object.
    // Example
    function greet({ name, age }) {
        console.log("Hello " + name + " " + age);
    }
    greet({ name: "John", age: 20 }); // Output: "Hello John 20"