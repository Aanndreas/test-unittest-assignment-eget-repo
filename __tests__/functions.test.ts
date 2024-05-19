// test/functions.test.ts

import { addTodo, changeTodo, removeAllTodos } from "../src/ts/functions";
import { Todo } from "../src/ts/models/todo";

describe("addTodo function", () => {
	it("should add a new todo when given valid input", () => {
		const todos: Todo[] = [];
		const todoText = "New Todo";

		const result = addTodo(todoText, todos);

		expect(result.success).toBe(true);
		expect(result.error).toBe("");
		expect(todos.length).toBe(1);
		expect(todos[0].text).toBe(todoText);
		expect(todos[0].done).toBe(false);
	});

	it("should return an error when given invalid input", () => {
		const todos: Todo[] = [];
		const todoText = "Hi"; // less than 3 characters

		const result = addTodo(todoText, todos);

		expect(result.success).toBe(false);
		expect(result.error).toBe("Du måste ange minst tre bokstäver");
		expect(todos.length).toBe(0); // no todo should be added
	});
});

describe("changeTodo function", () => {
	it("should toggle the 'done' property of a todo", () => {
		const todo = new Todo("Test Todo", false);

		changeTodo(todo);

		expect(todo.done).toBe(true);

		changeTodo(todo);

		expect(todo.done).toBe(false);
	});
});

describe("removeAllTodos function", () => {
	it("should remove all todos from the array", () => {
		const todos: Todo[] = [
			new Todo("Todo 1", false),
			new Todo("Todo 2", true),
			new Todo("Todo 3", false),
		];

		removeAllTodos(todos);

		expect(todos.length).toBe(0);
	});
});
