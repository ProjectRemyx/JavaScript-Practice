//ES6 Arrow Functions
/* 
const/var funcName (parameters) => { statements } 
- if only one parameter optional brackets
const/var funcName parameter => { statements }
- if returning an expression
const/var funcName parameter => expression
*/
const addNums = (num1 = 1, num2 = 1) => num1 + num2;
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
    console.log(todo.id)
});

//map
const todoText = todos.map((todo) => {
    return todo.text;
});
console.log(todoText);

//filter
const todoCompleted = todos.filter((todo) => {
    return todo.isCompleted === true;
}).map((todo) => {
    return todo.text;
});
//Chaining high order arrays to get specific information
console.log(todoCompleted);
