


/*  1. Intro to varibles

   varibles can store some info
    varibles can be used to store data
*/


// 1.1  Declaring a varible

var name = "John Doe";
// using the varible
console.log(name);



//   Rules for naming varibles
// 1. Varibles can only contain letters, numbers, $ and _
// 2. Varibles can not start with a number
// 3. Varibles are case sensitive
// 4. Varibles can not be a reserved keyword


/*
2. String indexing

*/

var name2 = " John  ";
console.log(name2[0]); // J
console.log(name2[1]); // o
 

// 3. String length
console.log(name2.length); // 6

// 4. String methods
console.log(name2.toUpperCase()); // JOHN
console.log(name2.toLowerCase()); // john
 
name2.trim(); // removes white spaces
console.log(name2.trim()); // John
console.log(name2.length); // 6
console.log(name2.trim().length); // 4 => it creates a new string


// 5. Slice => it ignores the last index
console.log(name2.slice(0, 3)); // Joh
console.log(name2.slice(0, 4)); // John

// 6. type of operator is used to check the type of a varible
console.log(typeof name2); // string
console.log(typeof 1); // number

// 7. sting to number is done by using Number() function
var age = "20";
console.log(typeof age); // string
console.log(typeof Number(age)); // number
// 8. number to string
var age2 = 20;
console.log(typeof age2); // number
console.log(typeof age2.toString()); // string


// 9. String concatenation is a way to concatenate strings using + operator
var firstName = "John";
var lastName = "Doe";
var fullName = firstName + " " + lastName;
console.log(fullName); // John Doe

// 10. Template literals  is a way to concatenate strings using backticks
var firstName = "John";
var lastName = "Doe";
var fullName = `${firstName} ${lastName}`;
console.log(fullName); // John Doe
 

//  Undefined  
var name3;
console.log(name3); // undefined
 typeof name3; // undefined

 // Null is a special value that represents nothing
    var name4 = null;
    console.log(name4); // null
    typeof name4; // object  => it is a bug in javascript

    // difference between null and undefined =>  undefined means a variable has been declared but has not 
    // yet been assigned a value, whereas null is an assignment value, meaning that a variable has been 
    // declared and given the value of null .

//  11. BigInt is a way to store large numbers
var bigInt = 1234567890123456789012345678901234567890n; // n is used to indicate that it is a big int 
console.log(bigInt); // 1234567890123456789012345678901234567890n
console.log(typeof bigInt); // bigint

// we can not mix big int with other types
  let no1= 10;
    let no2 = 10n;
    console.log(no1 + no2); // error  => we can not mix big int with other types


    //  12.  == vs ===  => == is used to compare values and === is used to compare values and types
    console.log(10 == "10"); // true
    console.log(10 === "10"); // false

    // 13. != vs !== => != is used to compare values and !== is used to compare values and types
    console.log(10 != "10"); // false
    console.log(10 !== "10"); // true

    //  14.  Falsy values => false, 0, "", null, undefined, NaN 
    console.log(Boolean(false)); // false
    console.log(Boolean(0)); // false
    console.log(Boolean("")); // false
    console.log(Boolean(null)); // false
    console.log(Boolean(undefined)); // false
    console.log(Boolean(NaN)); // false

    // 15. Truthy values => true, 1, " ", [], {}
    console.log(Boolean(true)); // true
    console.log(Boolean(1)); // true
    console.log(Boolean(" ")); // true
    console.log(Boolean([])); // true
    console.log(Boolean({})); // true

    
    let first=""
    if(first){
        console.log(first)}
    else{
        console.log("empty string")
    }   // prints empty string


    // 16. ternary operator is a way to write if else in one line
    let age = 20;
    let message = age > 18 ? "Adult" : "Child";
    console.log(message); // Adult

    //  18.  and vs or  => and is used to check if all conditions are true and or is used to check if any
    //  condition is true
    console.log(true && true); // true
    console.log(true && false); // false
    console.log(true || false); // true
    console.log(false || false); // false

    // 19.  Nested if else is a way to write if else inside another if else
    let age = 20;
    if (age > 18) {
      console.log("Adult");
    } else {
      if (age < 18) {
        console.log("Child");
      } else {
        console.log("Teen");
      }
    } // Adult  

    // 20. else if 
    let age = 20;
    if (age > 18) {
      console.log("Adult");
    } else if (age < 18) {
      console.log("Child");
    } else {
      console.log("Teen");
    } // Adult


    // 21. Switch statement is a way to write if else in a different way 
    let day = 2;
    switch (day) {
      case 1:
        console.log("Monday");
        break;
      case 2:
        console.log("Tuesday");
        break; // it is used to break the loop
      case 3:
        console.log("Wednesday");
        break;
      default:
        console.log("Invalid day");
    } // Tuesday



