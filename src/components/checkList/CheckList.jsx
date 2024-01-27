import React, { useState } from "react";
import "./checkList.style.css";

const CheckList = ({ addTodo }) => {
	const [value, setValue] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		addTodo(value);
		setValue("");
	};
	
	return (
		<div>
			<form onSubmit={handleSubmit} className="TodoForm">
				<input
					type="text"
					className="todo-input"
					placeholder="What is the task today?"
					onChange={(e) => setValue(e.target.value)}
					value={value}
				/>
				<button type="submit" className="todo-btn">
					Add Task{" "}
				</button>
				
			</form>
		</div>
	);
};

export default CheckList;
