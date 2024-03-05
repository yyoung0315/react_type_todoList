import React, { useState } from "react";
import "./App.css";
import TodoBoard from "./componant/TodoBoard";

// App 컴포넌트는 Todo 앱의 최상위 컴포넌트입니다.
function App() {
  // inputValue는 input 요소에 입력된 값을 추적하기 위한 상태입니다.
  // setInputValue는 이 값을 업데이트하기 위한 함수입니다.
  const [inputValue, setInputValue] = useState("");

  // setTodoList는 이 배열을 업데이트하기 위한 함수입니다.
  const [todoList, setTodoList] = useState<string[]>([]);

  // addItem 함수는 새로운 할 일을 todoList에 추가하고 입력창을 비웁니다.
  const addItem = () => {
    if (inputValue.trim() !== "") {
      // 빈 문자열이 아닐 때만 추가
      setTodoList([...todoList, inputValue]);
      setInputValue(""); // 입력창을 비웁니다.
    }
  };

  // deleteItem 함수는 특정 인덱스의 할 일을 todoList에서 제거합니다.
  const deleteItem = (index: number) => {
    // filter 함수를 사용하여, 선택된 인덱스의 할 일을 제외한 새로운 배열을 생성합니다.
    const newTodoList = todoList.filter((_, itemIndex) => itemIndex !== index);
    // 새로운 할 일 목록으로 todoList 상태를 업데이트합니다.
    setTodoList(newTodoList);
  };

  const editItem = (editIndex: number, editItemValue: string) => {
    const editTodoList = todoList.map((item, itemIndex) => {
      if (itemIndex === editIndex) {
        // 수정하고자 하는 인덱스에 대해서는 새로운 값을 반환합니다.
        return editItemValue;
      } else {
        // 그 외의 요소는 기존의 값을 그대로 반환합니다.
        return item;
      }
    });

    setTodoList(editTodoList);
  };

  // UI를 렌더링합니다.
  return (
    <main>
      {/* 할 일 입력창. 입력값이 변경될 때마다 setInputValue 함수를 호출하여 inputValue 상태를 업데이트합니다. */}
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      {/* 추가 버튼. 클릭 시 addItem 함수를 호출하여 새로운 할 일을 목록에 추가합니다. */}
      <button onClick={addItem}>추가</button>

      {/* TodoBoard 컴포넌트. todoList 배열과 deleteItem 함수를 props로 전달합니다. */}
      <TodoBoard
        todoList={todoList}
        deleteItem={deleteItem}
        editItem={editItem}
      />
    </main>
  );
}

export default App;
