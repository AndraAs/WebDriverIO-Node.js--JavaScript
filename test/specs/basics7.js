module.exports =class Person {
  //property
  age = 25;
  //property
  get location() {
    return "Canada";
  }
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  //methods
  fullName() {
    console.log(this.firstName + this.lastName);
  }
}
//constructor is a method which executes by default when you create object of the class

// let person = new Person("Tim", "Jose");
// let person1 = new Person("Chris", "Man");
// console.log(person.age);
// console.log(person.location);
// person.fullName();
// person1.fullName()
