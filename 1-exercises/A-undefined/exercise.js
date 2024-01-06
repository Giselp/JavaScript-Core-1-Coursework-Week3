/*
    By now, you would have already seen "undefined", either in an error message or being output from your program.
    But what does it mean? undefined represents the absence of a value.
    
    In some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
    But usually, when you see undefined - it means something has gone wrong!

    Below are 4 typical examples of when you would see undefined.
    For each example, can you explain why we are seeing undefined?
*/

// Example 1
/* Answer: It is undefined because the variable has no value asigned.*/
let a;
console.log(a);


// Example 2
/* Answer: It is undefined beacuse the function does not return a value. */
function sayHello() {
    let message = "Hello";
}

let hello = sayHello();
console.log(hello);


// Example 3
/* Answer: It is undefined because the parameter of the function does not have a value.*/
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser();


// Example 4
/*Answer: It is undefined because the position 3 of the array does not have a value (only positions 0, 1 and 2 have a value).*/
let arr = [1,2,3];
console.log(arr[3]);
