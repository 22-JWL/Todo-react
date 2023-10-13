import React, { useState } from 'react';

export default function Todo({ item, deleteItem }) {
  const [todoItem, setTodoItem] = useState(item);
  const { id, title, done } = todoItem;

  const onDeleteButtonClick = () => {
    deleteItem(todoItem);
  };

  return (
    <div>
      <input
        type="checkbox"
        name={`todo${id}`}
        id={`todo${id}`}
        defaultChecked={done}
      />
      <label htmlFor={`todo${id}`}>{title}</label>
      <button onClick={onDeleteButtonClick}>DELETE</button>
    </div>
  );
}
