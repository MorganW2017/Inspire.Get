function TodoController() {
	var todoService = new TodoService()
	function getTodos() {
		todoService.getTodos(draw)
	}
	function draw(todos) {
		var formElem = document.getElementById('todo');
		var template = ''
		for (var i = 0; i < todos.length; i++) {
			var todo = todos[i];
			template += `
			<div class="col-md-3">
			<div class="panel panel-info">
				<div class="panel-heading">
					<h3>${i + 1}. ${todo.todo}
						<button type="submit" onclick="app.components.todo-controller.removeTodo(${i})" class="btn btn-default">Remove</button>
					</h3>
				</div>
			</div>
		</div>
			`
		}
		formElem.innerHTML = template
		this.addTodoFromForm = function addTodoFromForm(e) {
			e.preventDefault()
			var form = e.target
		}
		todoService.addTodo(todo, getTodos)
	}
	this.toggleTodoStatus = function (todoId) {
		todoService.toggleTodoStatus(todoId, getTodos)
	}
	this.removeTodo = function removeTodo(index) {
		todoService.removeTodo(index, getTodos)
	}
	getTodos()
}
