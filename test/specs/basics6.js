//object is a collection of properties
let person = {
  firstName: "Andra",
  lastName: "Astalus",
  age: 24,
  fullName: function () {
    console.log(this.firstName + " space " + this.lastName);
  },
};
console.log(person.fullName());
console.log(person.firstName);
let arrayVal = person["lastName"];
console.log(arrayVal);
person.firstName = "Barbara";
console.log(person.firstName);
person.gender = "female";
console.log(person);
// delete person.gender
// console.log(person)
console.log("gender" in person);
for (let key in person) {
  console.log(person[key]);
}
