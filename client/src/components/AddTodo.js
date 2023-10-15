import React, { useState } from 'react';
import '../styles/TodoComponent.scss';

export default function AddTodo({ addItem }) {
  const [todoItem, setTodoItem] = useState({
    title: '',
  });

  const onButtonClick = () => {
    addItem(todoItem);
    setTodoItem({
      title: '',
    });

    //input 초기화
  };

  return ( 
      <div className="AddTodo">
        <input className='addInput'
          type="text"
          placeholder="할 일 입력"
          value={todoItem.title}
          onChange={(e) => setTodoItem({ title: e.target.value })}
        />
        <button on onClick={onButtonClick}>
          ADD
        </button>
      </div>
  );
}
