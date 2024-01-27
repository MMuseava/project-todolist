import React, { useState } from "react";
import "./editTodoForm.style.css";

const EditTodoForm = ({ editTodo, task }) => {
	const [value, setValue] = useState(task.task);

	const handleSubmit = (e) => {
		e.preventDefault();

		editTodo(value, task.id);
		setValue("");
	};
	return (
		<div>
			<form onSubmit={handleSubmit} className="TodoForm">
				<input
					type="text"
					className="todo-input"
					placeholder="Update Task"
					onChange={(e) => setValue(e.target.value)}
					value={value}
				/>
				<button type="submit" className="todo-btn">
					Update Task{" "}
				</button>
			</form>
		</div>
	);
};

export default EditTodoForm;
