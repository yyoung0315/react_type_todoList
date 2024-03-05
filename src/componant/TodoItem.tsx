import React, { useState } from "react";
import DeleteButton from "./deleteButton";

function TodoItem(props: {
  item: string;
  index: number;
  deleteItem: () => void;
  editItem: (index: number, newItemValue: string) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(props.item);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    props.editItem(props.index, editValue);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span>{props.item}</span>
          <button onClick={handleEdit}>Edit</button>
          <DeleteButton onClick={props.deleteItem} />
        </>
      )}
    </div>
  );
}

export default TodoItem;
