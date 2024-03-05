import React from "react";
import DeleteButton from "./deleteButton";
import "../style/todoItem.css";

function TodoItem(props: {
  item: string;
  deleteItem: () => void;
  key: number;
}) {
  return (
    <div className="todo-item">
      {props.item}
      <div className="DeleteButton">
        <DeleteButton onClick={props.deleteItem} />
      </div>
    </div>
  );
}

export default TodoItem;
