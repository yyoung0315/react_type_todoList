import React, { useState } from "react";
import "./App.css";
import TodoBoard from "./componant/TodoBoard";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState<string[]>([]);
  const addItem = () => {
    setTodoList([...todoList, inputValue]);
  };
  const deleteItem = (index: number) => {
    const newTodoList = todoList.filter((_, itemIndex) => itemIndex !== index);
    setTodoList(newTodoList);
  };
  return (
    <main>
      <input
        type="text"
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={addItem}>추가</button>

      <TodoBoard todoList={todoList} deleteItem={deleteItem} />
    </main>
  );
}

export default App;
