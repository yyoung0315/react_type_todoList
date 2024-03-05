import React from "react";
import TodoItem from "./TodoItem";

function ToBoard(props: {
  todoList: string[];
  deleteItem: (index: number) => void;
  editItem: (index: number, newItemValue: string) => void; // 함수 시그니처 수정
}) {
  return (
    <div>
      <h1>Todo List</h1>
      {props.todoList.map((item, index) => (
        <div key={index}>
          <TodoItem
            item={item}
            index={index} // `TodoItem`에 `index` prop 추가
            deleteItem={() => props.deleteItem(index)}
            editItem={props.editItem} // `editItem` 함수 전체를 prop으로 전달
          />
        </div>
      ))}
    </div>
  );
}
export default ToBoard;
