/*
Question 1: 
Refactor the following function into a one-liner:
const printName = (name) => {
                     return “Hi” + name;
           }
*/

// if we have only one parameter, we can skip the parentheses as well.
const printName = name => "Hi" + name;

console.log(printName(" raushan"));

/*
Question 2:
Rewrite the following code using template literals
const printBill = (name, bill) => {
                     return “Hi “ + name + “, please pay: “ + bill;
}
*/

const printBill = (name, bill) => {
    return `Hi ${name}, please pay: ${bill}`;
};


console.log(printBill("raushan", 20));

/*
Question 3:
Modify the following code such that the object properties are destructured and logged.
const person = {
                    name: “Noam Chomsky”,
                    age: 92
}
           
   let name = person.name;
   let age = person.age;
   console.log(name);
   console.log(age);

   */

const person = {
  name: "Noam Chomsky",
  age: 92,
};

// Extracting the Object property using Object destructuring & printing in console.
const { name, age } = person;
console.log(name, age);
