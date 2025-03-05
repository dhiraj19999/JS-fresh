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
     
    