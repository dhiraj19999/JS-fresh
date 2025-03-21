


/*

How js works

*/


console.log(this);
console.log(window);
console.log(firsname);
var  firsname="dhiraj"
console.log(firsname);
/*
at first code get complied and then excute

during compilation synetx error get checked
and determine the scope of varibles
  
information about  firsname varible avallible in global scope as it did not decalred in function

in js code excutes inside excution context and the first excution contest is global
excution context
then global excution context get add in stack.
global excution has two phases
first is creation phase
second is code excution phase
when globel excution context get created in creation phase then there is creation of varible for example
firsname varible get created with undefined value as it declare with var keyword
in creatin phase the value of this keyword get set with  value windows ..(this:window)
window is global object here which is already presented and provided by browser

now come to excution phase

at first it prints window object as this sets its value to window
then window obj get printed
now at 3rd line it prints undefined as firstname set value with undefined in creation phase
now in 4th line firsname value get set with dhiraj .
at 5th line dhiraj get printed

and after all code get excuted then global excution context get poped from stack
*/

/*
what happens when decleare function
*/

console.log(this);
console.log(window);
console.log(myFunction);
myFunction()
console.log(FullName);

function myFunction(){
    console.log("hello");
}

var firsname="dhiraj"
var lastname="garad"
var FullName=firsname+lastname

/*
information about firstname,lastname and Fullname varibles and function myfunction are availbel 
in global scope
 code get compiled for syntex error checking
during global excutin context creation  this keyword with window
then firstname,lastname,fullname and myfunction get created .

varibles get created with undefined value

then excution phase at line no 832 it prints just total function not value for examplee
it prints function but not the console.log() value

and after all code get excuted then global excution context get poped from stack

*/


console.log(myfun);

var myfun=function(){

    console.log("fun");
}

console.log(myfun);
/*

myfun availble in global scope
global exction creation get created and with this myfun is get created with undefined value
as it declre with var keyword

during excution phase line no 861 prints undefined
at line no 863 myfun value get changed to function
line no 868 prints function

if we declare myfun with let keword then the line no 861 prints cannot accses myfun before intialisation
*/

// let and const

console.log(fruit);

let fruit="mango"
console.log(fruit);

/*
during global excution creation fruit get created with unintilised 

during excution phase lone no 884 prints cannot accses fruit before intialisation
line no 886 it intialize the value




*/

