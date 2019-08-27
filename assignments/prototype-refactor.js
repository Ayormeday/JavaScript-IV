/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
  // TASK 1

  // - Build a Person Constructor that takes name and age.
  // - Give persons the ability to greet by returning a string stating name and age.
  // - Give persons the ability to eat edibles.
  // - When eating an edible, it should be pushed into a "stomach" property which is an array.
  // - Give persons the ability to poop.
  // - When pooping, the stomach should empty.

//   function Person (name, age){
//     this.name = name;
//     this.age = age;
//     this.stomach = [];
  
//   } ;
  
//   Person.prototype.greet = function (){
//     return `Hello, I am ${this.name} and I am ${this.age} years old`
//   };
  
//   Person.prototype.eatEdible = function (food){
//     return this.stomach.push(food);
//   };
  
//   Person.prototype.poop = function (){
//     return this.stomach;
//   };
  
  
  
  class Person2 {
      constructor(info){
        this.name = info.name;
        this.age = info.age;
        this.stomach = [];
      }
      greet(){
        return `Hello, I am ${this.name} and I am ${this.age} years old`
      }
      eatEdible(food){
        return this.stomach.push(food); 
      }
      poop(){
        return this.stomach; 
      }
  }
const test = new Person2({name:"Ayomide", age:30});

  // TASK 2

  // - Build a Car constructor that takes model name and make.
  // - Give cars the ability to drive a distance.
  // - By driving a car, the distance driven should be added to an "odometer" property.
  // - Give cars the ability to crash.
  // - A crashed car can't be driven any more. Attempts return a string "I crashed at x miles!", x being the miles in the odometer.
  // - Give cars the ability to be repaired.
  // - A repaired car can be driven again.

//   function Car (model_name, make){
//     this.model = model_name;
//     this.make = make;
//     this.odometer = 0; 
//   };

//   Car.prototype.drive = function (distance){
//     return this.odometer += distance;
//   };

//   Car.prototype.crash = function (){
  
//     return `i crashed at ${this.odometer} miles`
//   };

//   Car.prototype.carRepaired = function (){

//   };
class Car {
    constructor(model, make){
        this.model = model;
        this.make = make;
        this.odometer = 0; 
        this.carDrives = true;
    }
    drive(distance){
        return this.odometer += distance;
    }
    crash(){
        this.carDrives = false;
        return `i crashed at ${this.odometer} miles`
    }
    carRepaired(){
        return this.carDrives;
    }
}
const testNow = new Car("benz", "mayback");

  // TASK 3

  // - Build a Baby constructor that subclasses the Person built earlier.
  // - Babies of course inherit the ability to greet, which can be strange.
  // - Babies should have the ability to play, which persons don't.
  // - By playing, a string is returned with some text of your choosing.

//   function Baby(name, age, toys){
//     Person.call(this, name, age);
//     this.toys = toys;
//   };

//   Baby.prototype = Object.create(Person.prototype);

//   Baby.prototype.play = function (){
//     return `I can play with my ${this.toys}`
//   }

//   var sonny = new Baby('Tom', 4, "toy cars");

class Baby extends Person2 {
    constructor (info, toys){
        super(info);
        this.toys = toys;
    }
    play(){
        return `I can play with my ${this.toys}`
    }
}
var sonny = new Baby({name:"Tony", age:3},"toy cars");
  // TASK 4

  // Use your imagination and come up with constructors that allow to build objects
  // With amazing and original capabilities. Build 3 small ones, or a very
  // complicated one with lots of state. Surprise us!


