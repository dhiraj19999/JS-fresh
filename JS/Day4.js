// Maps
/*maps are iteriable 
store data in orderd fashion 
store key value pair
duplicate keys are not allowed like objects
obj can only have string or symbol as key
in maps you can use anything as a key like array,number,string

*/

const person=new Map();

person.set("firstname","dhiraj")
person.set("lastname","garad")

console.log(person.get('firstname'));

for(let key of person.keys()){
    console.log(key);
}

for(let [key,value] of person){
console.log(Array.isArray(key)) // it returns true
    

    console.log(key,value);
}

///  Object clone using Object assign


const obj1={
    a:"abc",
    b:"cvb"
}

const obj2=Object.assign({},obj1)// this is totally new object


// optional chaining
//  The Optional Chaining Operator allows developers to access properties of an object without worrying 
// about TypeError, making the code more concise and less prone to bugs

let user={
    name:"gghgh",
    addre:{hn:'123'}
}

console.log(user?.addre?.hn);// addre key available then it givs value else give undefined 
// it use for avoid errors 



/*
METHODS means function inside object

*/

const abc={
    fs:"dhiraj",
    about:function() {
      console.log(this.fs);  // this keyword points towards object or this is a abc object
    }
    }
    
    console.log(abc.about());// yaha about ko abc call kr raha hai so this refers to abc objct



    function userInfo(){
        console.log(this.fs);
    }
    
    const abc2={
        fs:"suraj",
       about:userInfo
        }
    
            
        abc2.about()// it prints suraj becuse about is called by abc2 obj so this points towards abc2   
        
    
        function nam() {
            // "use strict"  if we use use strict then it doesnt print window obj it prints undefined
             console.log(this);// prints window object
         }
         nam()
     

         

         //  Call ,  Bind  , Apply  

         const student={
            name:"dhiraj",
            age:23,
            fun:function() {
                console.log(this.name);
            },
            arrow:()=>{
                console.log(this.age); // prints undefined , aarow fun take this one step up ie window
            }
        
        }

        student.fun()// it prints dhiraj
        student.arrow()// it prints undefined becuase arrow function take this as a window object
        student.arrow.call(student)// it prints undefined becuase arrow function take this as a window object


       //  Call 

       /*

The Call() Method calls the function directly and sets this to the first argument passed to the call 
method and if any other sequences of arguments preceding the first argument are passed to the call method 
then they are passed as an argument to the function.
it is useful in to change the context of this
JavaScript provides the call(), apply(), and bind() methods for setting the this context within a function. 
These methods are especially useful when working with object-oriented code
       */

        const user2={
            fs:"dhiraj",
            age:8,
            about:function(hobby,music){
                console.log(this.fs,this,this.age,hobby,music)
            }
        }


        const user3={
            fs:"suraj",
            age:20  
        }


        user2.about.call(user3,"guiter","aashiq") 
        //  appply

        user2.about.apply(user3,["guiter","aashiq"]) 

        //  bind
        const func= user2.about.bind(user3,"guiter","aashiq") 
        
     func()

     //  
     // bind  Returns a new function with the specified this value, but does not invoke the function 
     // immediately Can be called later when needed.


     const user4={
        fs:"dhiraj",
        age:8,
        about:function(hobby,music){
            console.log(this);// print window
            
            console.log(this.fs,this,this.age,hobby,music)
        }
    }


       const myfun=user4.about;

    myfun() // prints undefined becuz jub tuk hum method call nahi krte tub tuk about fun ka
    //  this context user4 ke object me change ya point nahi hoga
     


       const obj1={
    key1:"value1",
    key2:"value2"
}

const obj2=Object.create(obj1)// it returns {}, it sets obj1 as a ___proto of obj2

obj2.key3="value3"
console.log(obj2.key1);// it prints value1 as it first find value in obj2 and then in proto




const userMethod={
    about:function () {
      return(this.firstName)  
    },
    sing:function () {
        return("qgq")  
      },
      
}


function createUser(firstName,lastname) {
    const user=Object.create(userMethod) // here we sets userMethod object  as a proto of user
    user.firstName=firstName,
   user.lastname=lastname
   //if we use Object.create here then we didn't need to write key everytime here just we have to
   // create keys in userMethod
  //user.about=userMethod.about,
  //user.sing=userMethod.sing
   return user
}


const user1=createUser("dhiraj","garad")
console.log(user1.about())// it prints dhiraj 




    /*

javascript functions= functions + object

we can add our own property


only function provides prototype property

we can add property in prototype
*/

function hello(){
    console.log("hello");
}

hello.myOwnproperty="unique value"

hello.prototype.sec="second hello"

console.log(hello.prototype.sec);


/*
proto is refernce and protoypte is object
prototype means free space in function where we can add property
only function has prototype property 

In JavaScript, a prototype is an object that allows other objects to inherit its properties and methods.
 This is called prototypal inheritance. 
How does it work?
Every JavaScript object has a prototype property that points to another object. 
The prototype property is a global property that can be used to add new properties and methods to objects. 
This creates a prototype chain, which is a sequence of objects that ends with the built-in Object. 
When an object is created, it inherits properties and methods from its prototype. 
Why is it useful?
Prototypes allow you to share methods across all instances of an object, which saves memory. 
You can extend the functionality of an object by adding methods to its prototype. 
You can mutate any member of the prototype chain or even swap out the prototype at runtime
*/



function create(firstName,lastname) {
    const user=Object.create(create.prototype) // here we sets create fun prototype  as a proto of user
    user.firstName=firstName,
   user.lastname=lastname
   //if we use Object.create here then we didn't need to write key everytime here just we have to
   // create keys in userMethod
  //user.about=userMethod.about,
  //user.sing=userMethod.sing
   return user
}

// by ussing protoytpe we don't need to create extra object for create  user methods we directly 
// add object metods in prototype of create fun.
create.prototype.about=function () {
    return(this.firstName)  
  },
  
  create.prototype.sing=function () {
      return("qgq")  
    }

const use1=create("dhiraj","garad")
console.log(use1.sing()); // ye call hoga becuz create fun ka prototype and uski sari properties use1 ke proto me set hua hai




/*

new keyword
create empty object
  return this


  The new keyword is used in JavaScript to create a object from a constructor function. 
  The new keyword has to be placed before the constructor function call and will do the following things
  : Creates a new object. Sets the prototype of this object to the constructor function's prototype property
.

*/


function createUser(name,age) {
    this.firstName=name,
    this.age=age

}

createUser.prototype.about=function() {
  console.log(this.firstName,this.age);  
}
const userinfo1= new createUser("dhiraj",24)// new keyword creates a new object and sets the
//  proto of userInfo1 object to createUser.prototype
// new keyword creates a new object and sets the proto of userInfo1 object to createUser.prototype
console.log(userinfo1.firstName);// it prints dhiraj
userinfo1.about()// it prints the value





// constructor function


/*
A constructor function in JavaScript is a special function that creates and initializes objects. It's 
used to define the properties and methods of an object. 
How it works 
A constructor function is usually defined within a class or an object blueprint.
When you use the new keyword to create an object, the constructor function is called.
The constructor function sets the initial state of the object.
You can specify the values of the object's properties when it is created.
Benefits
The constructor pattern in JavaScript makes it easy to create multiple instances of objects. 

It's considered good practice to name constructor functions with an upper-case first letter. 

*/
function Create(firstName,lastname) {
    //here  we not need to set proto
    this.firstName=firstName,
   this.lastname=lastname
  
}

Create.prototype.about=function () {
    return(this.firstName)  
  },
  
  Create.prototype.sing=function () {
      return("qgq")  
    }

const userin1= new Create("dhiraj","garad")
console.log(userin1.sing());


for (let key in userinfo1){
console.log(key)// sari key present hogi prototype wali bhi
    if(userinfo1.hasOwnProperty(key)){
        console.log(key); //  it does not print protoypt obj key it only prints userinfo1 key
    }
}


/*

ARRAY methods comes from prototype but in js only function have protoypts so internally
js creates the ARRay by using function so thats why array have methods from protoypes


*/


// we can change the prototype

   function hel(){
         console.log("hello");
   }

   console.log(hel.prototype)// object

   hel.prototype=[]
   console.log(hel.prototype)// array


   console.log(Array.prototype);// it prints all array methods
   // Array has array as a prototype