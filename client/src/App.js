import { useState } from 'react';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';

function App() {
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      title: 'my todo1',
      done: false,
    },
    {
      id: 2,
      title: 'my todo2',
      done: false,
    },
    {
      id: 3,
      title: 'my todo3',
      done: true,
    },
  ]);
  //todoItems 상태에 새로운 투두를 추가하는 일
  const addItem = (newItem) => {
    console.log(newItem); //{title:저녁먹기}

    //newItem: {id: 5, title: '저녁먹기', done: false}
    newItem.id = todoItems.length + 1;
    newItem.done = false;

    //todoItems 배열에 newItem을 추가
    setTodoItems([...todoItems, newItem]);
  };

  const deleteItem = (targetItem) => {
    const newTodoItems = todoItems.filter((item) => item.id !== targetItem.id);
    setTodoItems(newTodoItems);
  };

  return (
    <div className="App">
      <AddTodo addItem={addItem} />

      {/* todoItems반복, */}
      {todoItems.map((item) => (
        <Todo key={item.id} item={item} deleteItem={deleteItem}></Todo>
      ))}
    </div>
  );
}

export default App;
