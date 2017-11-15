function TodoService() {
	var baseUrl = 'https://inspire-server.herokuapp.com/api/todos/morganwaters'
	function logError(err) {
		console.error('UMM SOMETHING BROKE: ', err)
	}
	var id = 0
	this.getTodos = function (draw) {
		$.get(baseUrl)
			.then(function (res) {
				todos = res
				draw(todos)
			})
			.fail(logError)
	}
	this.addTodo = function (todo, getTodos) {
		$.post(baseUrl, todo)
			.then(function (res) {
			})
			.fail(logError)
	}
	this.toggleTodoStatus = function (todoId) {
		$.ajax({
			method: 'PUT',
			contentType: 'application/json',
			url: baseUrl + '/' + todoId,
			data: JSON.stringify(0)
		})
			.then(function (res) {
			})
			.fail(logError)
	}
	this.removeTodo = function (index, getTodos) {
		$.ajax({
			method: 'DELETE',
			url: baseUrl + '/' + index,
		})
			.then(getTodos)
			.fail(logError)
	}
}
