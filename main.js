const task = prompt("Enter a task for your to-do list");

const taskArray = [];
console.log (task);
taskArray.push(task);



const todo = prompt("write your todo");

const todoArray = [];
console.log (todo);
todoArray.push(todo);



console.log("Updated To-Do List:");
taskArray.forEach((task, index) => {
  console.log(`${index + 1}. ${task}`);
});

console.log("Updated To-Do List:");
todoArray.forEach((todo, index) => {
  console.log(`${index + 1}. ${todo}`);
});
