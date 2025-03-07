//  Classes 


/*

In JavaScript, a class is a template for creating objects that have properties, methods, and data.
 Classes are a type of function that were introduced in ECMAScript 2015, also known as ES6. 

*/

class CreateUser{

    constructor(firstName,lastname){  // this constructor creates object of class

        this.firstName=firstName,
        this.lastname=lastname
    }

    about(){  //  ye method  Createuser ke fun prototype me add ho jayega
        console.log(this.firstName);
    }
}

const userinf1= new Create("dhiraj","garad")  // new keyword se object create hota hai and CreateUser 
// sare prototypes object ke prototype me add honge 
console.log(userinf1);// CreateUser { firstName: 'dhiraj', lastname: 'garad' } 
console.log(userinf1.about());

console.log(Object.getPrototypeOf(userinf1)); // CreateUser { about: [Function] }  
// // about method add ho userinf1 object ke gaya prototype me


// class with extend keyword
//The extends keyword is used to create a child class of another class (parent). 
// The child class inherits all the methods from another class.

class  Animal{

    constructor(name,age){
        this.name=name;
        this.age=age
    }

    eat(){
        `${this.name}is eating`
    }
}

const animal1=new Animal("tuffy",2)  



class Dog extends Animal{ // now Dog class can access all the properties of Animal class
    

}

const animal2=new Dog("jimmy",4) // yaha new keyword object create krne ke liye Animal 
// class ke constructor ko call karega becuz Dog class me constructor nahi hai


//  super keyword
// The super keyword is used to access and call functions on an object's parent.


class Cat extends Animal{ // now Dog class can access all the properties of Animal class
    
   
    constructor(name,age,speed){
super(name,age) // super keyword is used to call the constructor of the parent class
// yaha hum name and age ko Animal class ke constructor me pass kar rahe hai
// but speed is not availble in Animal class so we have to pass it in Cat class constructor
        this.speed=speed
        }

run(){
    return(this.name)
}
eat(){// here eat function is also availble in Animal class that is base class
    // so what to print becuse both Cat and Animal have same functions so
    // js first check that is eat availble in Cat class  if availble then it prints and if
    // not availble then it checks to base class that is Animal class
    `modified eat${this.name}is eating`
}

}

const cat1=new Cat("phunky",4,45)
console.log(cat1.eat());// prints modified eat phunky is eating
console.log(animal2.name); // it prints phunky


  // geters and seters 

  class Dhiraj{
    constructor(name,lastname){

        this.name=name,
        this.lastname=lastname
    }

    get fullName(){ //  get keyowrd is used to treat a function as a property
        return `${this.name} ${this.lastname}`
    }

    set fullName(value){ // set keyword is used to set the value of property
        const [firstName,lastname]=value.split(' ') // split function is used to split the string  that is [dhiraj,garad]
        this.name=firstName
        this.lastname=lastname
    }
}


const dhiraj1=new Dhiraj("dhiraj","garad")
dhiraj1.fullName="dhiraj garad" // here we are setting the value of fullName property
// so it will call set fullName function and set the value of name and lastname

console.log(dhiraj1.fullName); // dhiraj garad,  fullName is a function but we are treating it as a property
// so we are not using () to call it, but if we try to do it without get keyoword then it will show function
// fullname and not its result
console.log(dhiraj1.fullName()); // it will show error becuz fullName is not a function it is a property 
// becuz we are using get keyword



//  static methods and properties

// The static keyword defines a static method or property for a class.
// Static members (properties and methods) are called without instantiating their class and cannot be 
// called through a class instance that is object of class
// Static methods are often used to create utility functions for an application.


class Dhiraj{
    constructor(name,lastname){

        this.name=name,
        this.lastname=lastname
    }

  static classinfo(){
    console.log("info is here");
  }
  // if we create method using static then we can't call that method on object
  // we have to call that method on class .

  static des="static property" // this is static priperty
 
    get fullName(){
       return `${this.name,this.lastname}` 
    }

    set fullName(fullName){
const[name,lastname]=fullName.split(" ")
this.name=name,
this.lastname=lastname
    }
}

const dhiraj1= new Dhiraj("Dhiraj","Garad")
console.log(dhiraj1.fullName);  // here we don't need to invoke fullName method as a fullName()
// becuse get method sends output with dhiraj1.fullName syntex

dhiraj1.fullName="Suraj Garad"// with this syntex set method modified the name and lastname to
// suraj garad respectively



// static methods and properties

Dhiraj.classinfo()// it prints "info is here"

Dhiraj.des // it prints static property