//ES6 Arrow Functions
/* 
const/var funcName (parameters) => { statements } 
- if only one parameter optional brackets
const/var funcName parameter => { statements }
- if returning an expression
const/var funcName parameter => expression
*/
const addNums = (num1 = 1, num2 = 1) => num1 + num2;
console.log("Arrow Functions");
console.log(addNums(5, 5));

//High Order Array Methods - forEach, map, filter
let todos = [
    {
        id: 1,
        text: 'Drink morning coffee',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: false
    },
    {
        id: 3,
        text: 'Call girlfriend',
        isCompleted: false
    }
];

//forEach
todos.forEach((todo) => {
    console.log("forEach")
    console.log(todo.id)
});

//map
const todoText = todos.map((todo) => {
    return todo.text;
});
console.log("map")
console.log(todoText);

//filter
const todoCompleted = todos.filter((todo) => {
    return todo.isCompleted === true;
}).map((todo) => {
    return todo.text;
});
//Chaining high order arrays to get specific information
console.log("filter and chaining");
console.log(todoCompleted);

//this keyword
//method -> obj
//function -> global (window, global)
function Video(title){
    this.title = title;
    console.log(this);
}

const v = new Video('b'); 

//Template Literals
let word1 = "Jing";
let word2 = "Cheng";

const fullName = `${word1} ${word2}`;
console.log("Template Literals");
console.log(fullName);

//Destructuring Objects
const personalInfo = {
    firstName: 'Jing',
    lastName: 'Cheng',
    city: 'Mississauga'
};

const {firstName: fn, lastName: ln} = personalInfo; //Destruct personalInfo Object
console.log("Destructuring Objects");
console.log(`${fn} ${ln}`);

//Destructuring Arrays
let [firstName, middleName, lastName] = ['Jing', 'Coding Noob', 'Cheng'];
lastName = 'Yun';
console.log("Destructuring Arrays");
console.log(lastName);

//Object Literal
function addressMaker(city, state){
    const newAddress = {city, state};
    console.log("Object Literals");
    console.log(newAddress);
}

addressMaker('Mississauga', 'Ontario');

//For of loop - Allows us to iterate through an array or string
let herName = "Jenny Yun";
console.log("For of loop");
for(const char of herName){
    console.log(char);
}

//Spread Operator - Unwraps whatever it references
let example = [1, 2, 3, 4, 5];
let example2 = [...example]; 
console.log("Spread Operator");
console.log(example2);

//Rest Operator 
function add(...nums){
    console.log("Rest Operator");
    console.log(nums);
}
add(4, 5, 6, 7, 8);

//Includes() - Returns a boolean value of true/false if the array contains the value
let numArray = [1, 2, 3, 4, 5];
console.log('Includes()');
console.log(numArray.includes(0));

//Let vs Const
//Let - Stricter version of var that uses block scope
//Const - Constant that cannot be changed (read only)

//Import & Export
// export const data = [1, 2, 3];
// import{ data } from './main.js';
// console.log(data);

