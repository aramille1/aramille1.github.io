var todos = ["Fix the door"];

var input = prompt("What would like to do?");

while(input !== "quit"){
if( input === "list"){
	listTodos();
}else if ( input === "new"){
	addTodo();
}else if ( input === "delete"){
	deleteTodo();
}

var input = prompt("What would like to do?");
}

console.log("OK, YOU QUIT THE APP");





// ********functions**********
function listTodos() {
	console.log("*************");
	todos.forEach(function(todo,i){
		console.log(i + ": " + todo);
	});
	console.log("*************");
}

function addTodo() {
	var newTodo = prompt("Enter new todo");
	todos.push(newTodo);
	console.log("Added Todo");
}

function deleteTodo() {
	var index = prompt("Enter index of todo to delete");
	todos.splice(index,1);
	console.log("Deleted Todo");
}

var num = [1,2,3,4];

function printReverse(){	
	for ( var i = num.length; i >= 0; i--){
	console.log(num[i]);
	}
}

var arr = ["a", "b", "c"];

function  printReverse(){	
	for ( var i = arr.length; i >= 0; i--){
	console.log(arr[i]);
	}
}

function isUniform([1,1,1,1])