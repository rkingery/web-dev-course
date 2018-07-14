var todos = [];

window.setTimeout(function() {
	while (true) {
		var command = prompt('What would you like to do?');
		if (command === "new") {
			addTodo();
		}
		else if (command === "list") {
			listTodos();
		}
		else if (command === "quit") {
			break;
		}
		else if (command == "delete") {
			deleteTodo();
		}
		else {
			console.log('Invalid command.');
		}
	}

}, 500);

console.log('You quit the app!')

function addTodo() {
	var todo = prompt('Enter a new todo');
	todos.push(todo);
	console.log(String(todo)+' added to list');
}

function listTodos() {
	console.log('**********');
	todos.forEach(function(item,index) {	
		console.log(index+': '+item);
	});
	console.log('**********');
}

function deleteTodo() {
	var index = prompt('Enter index of todo to delete');
	todos.splice(index,1); // delete todos[splice] from list
	console.log('Deleted todo');
}