import React, { useState } from 'react';

export default function Todo({ item, deleteItem, updateItem }) {
  const [todoItem, setTodoItem] = useState(item);
  const { id, title, done } = todoItem;
  const [readOnly, setReadOnly] = useState(true);

  const onDeleteButtonClick = () => {
    deleteItem(todoItem);
  };
  //title 클릭하면 readOnly를 false 변경(수정 가능하도록)
  const offReadOnlyMode = () => {
    setReadOnly(false);
  };

  const editEventHandler = (e) => {
    const { title, ...rest } = todoItem;
    setTodoItem({
      title: e.target.value,
      ...rest,
    });
  };
  //enter키 누르면 readOnly true 변경
  const editKeyEventHandler = (e) => {
    if (e.key === 'Enter') {
      setReadOnly(true);
      updateItem(todoItem);
    }
  };
  ///checkbox상태 업데이트
  const checkboxEventHandler = (e) => {
    const { done, ...rest } = todoItem;

    const updatedItem = {
      done: e.target.checked,
      ...rest,
    };
    setTodoItem(updatedItem);
    updateItem(updatedItem);
  };

  return (
    <div className="todo">
      <input className='boxCheck'
        type="checkbox"
        name={`todo${id}`}
        id={`todo${id}`}
        defaultChecked={done}
        onChange={checkboxEventHandler}
      />
      {/* <label htmlFor={`todo${id}`}>{title}</label> */}

      <input className='boxContent'
        type="text"
        value={todoItem.title}
        readOnly={readOnly}
        onClick={offReadOnlyMode}
        onChange={editEventHandler}
        onKeyDown={editKeyEventHandler}
      />
      <button className='btn-8' onClick={onDeleteButtonClick}>DELETE</button>
    </div>
  );
}
