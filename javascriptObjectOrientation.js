function getMethods(obj){
  for(x in obj){
    console.log(x)
  }
}

function User(fname, lname, email){
  this.fname = fname;
   this.lname = lname;
     this.email = email;
      this.name = function(){return this.fname + " " + this.lname;}
    }

function Multiplier(){
  var cv
  if( cv == null) {cv = 1}
    this.multiply = function(n){
      if (n == NaN){n=1}
        rVal = n * this.getCurrentValue()
        cv = rVal
        return rVal
    }
    this.getCurrentValue = function(){
      return cv
    }
}

function Photo(name, locatoin){
  this.name = name;
  this.location = location;
}

function Album(){
  this.photos = [];
  this.addPhoto = function(p) { this.photos.push(p)}


  this.listAllPhotos = function(){
    for(var i = 0; i < this.photos.length; i++){
      console.log(this.photos[i].name)
      console.log(this.photos[i].location)
    }
  }
  this.getPhoto = function(id) {
    if (this.photos[id]){
      return this.photos[id]
    }  else {
    return "no photo at that position"
  }
}
};

function Person(name){
  this.name = name;

}
function Teacher(){
  this.grading = "";
  Person.apply(this, arguments)

}
function Student(name, sports) {
  this.sports = sports;
  Person.apply(this, arguments)

}
Teacher.prototype = new Person;
Student.prototype = new Person;

// creating an object using object literal:
//objects should be capitalized

var Vehicle = {
  motor: true,
  brand: "American",
  engines: 1
  "has-leather": false
}

// creating an object using object constructor:
function Car(brand, wheels){
  this.brand = brand;
  this.wheels = wheels;
  friendly_brand: function(){
     return "Your car's brand is " + this.brand;
   }
}

// creating instances of objects:
var my_car = new Car("buick", 4)
var joes_car = new Car("Audi", 4)

// accessing object attributes and methods

var new_car = Vehicle
new_car["has-leather"] //has to be bracket notation cuz attributewith string
new_car.motor //can use dot notation cuz attribute was set without quotes

my_car.friendly_brand(); //calls a method defined on the car object

// prototypial objects adds methods or attributes to all instances of objects

Car.prototype.vroom = function(){
  return "this car goes vroom vroom";
}
my_car.vroom()  //this now works