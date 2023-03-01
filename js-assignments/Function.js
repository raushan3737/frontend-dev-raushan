// Q1. Write a program to demonstrate how a function can be passed as a parameter to another function.


// Function to greet 
function greet()
{
    let greetText = "Good Morning," ; 
    return greetText;
}


// In greetUser function, passing the greet() fun as a paramter
function greetUser(userName , greetFun)
{
    // Accessing passed function
    const returnGreetText = greetFun();

    // Using the returned value of greet() fun inside the another function i.e. greetUser()
    console.warn(`${returnGreetText}` , userName) ; 
}

greetUser("raushan" , greet) ; 
greetUser("kundan" , greet) ; 



/*
Q2. An arrow function takes two arguments firstName and lastName and returns a 2 letter string that represents the first letter of both the arguments. For the arguments Roger and Waters, the function returns ‘RW’. Write this function.
Submit the github link to the code

*/

// Arrow function which return the first character of both the passed parameter
const pickFirstChar = (firstName , lastName) => {

    return firstName[0] + lastName[0]; 

}

// Printing the returned value by Invoking the pickFirstChar Arrow function. 
console.log(pickFirstChar("Roger" , "Waters"));