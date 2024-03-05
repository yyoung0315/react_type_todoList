import React from "react";
import TodoItem from "./TodoItem";

function ToBoard(props: {
  todoList: string[];
  deleteItem: (index: any) => void;
}) {
  return (
    <div>
      <h1>Todo List</h1>
      {props.todoList.map((item, index) => (
        <div>
          <TodoItem
            item={item}
            deleteItem={() => props.deleteItem(index)}
            key={index}
          />
        </div>
      ))}
    </div>
  );
}
export default ToBoard;
