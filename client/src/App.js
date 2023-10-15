import { useEffect, useState } from 'react';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import axios from 'axios';

function App() {
  // console.log(process.env.REACT_APP_DB_HOST);
  const [todoItems, setTodoItems] = useState([]);

  //server랑 연결
  useEffect(() => {
    const getTodos = async () => {
      const res = await axios.get(`${process.env.REACT_APP_DB_HOST}/todos`);
      setTodoItems(res.data);
    };

    getTodos();
  }, []);

  //todoItems 상태에 새로운 투두를 추가하는 일
  const addItem = async (newItem) => {
    // console.log(newItem); //{title:저녁먹기}

    // //newItem: {id: 5, title: '저녁먹기', done: false}
    // newItem.id = todoItems.length + 1;
    // newItem.done = false;

    // //todoItems 배열에 newItem을 추가
    // setTodoItems([...todoItems, newItem]);

    const res = await axios.post(
      `${process.env.REACT_APP_DB_HOST}/todo`,
      newItem
    );
    console.log(res); //Promise {<pending>}오류 났었음
    setTodoItems([...todoItems, res.data]);
  };

  //todoItems 상태에 특정 todo를 삭제하는 일
  const deleteItem = async (targetItem) => {
    await axios.delete(
      `${process.env.REACT_APP_DB_HOST}/todo/${targetItem.id}`
    );
    const newTodoItems = todoItems.filter((item) => item.id !== targetItem.id);
    setTodoItems(newTodoItems);
  };

  const updateItem = async (targetItem) => {
    await axios.patch(
      `${process.env.REACT_APP_DB_HOST}/todo/${targetItem.id}`,
      targetItem
    );
  };

  return (
    <div className='background'>
    <div className="App">

      <header> 오늘의 할 일을 메모해 보세요 ^^ </header>
      <div className='todoContainer'>
      <AddTodo addItem={addItem} />
      <div className='count'> 오늘의 Todo : {todoItems.length}</div>

      {/* todoItems반복, */}
      {todoItems.map((item) => (
        <Todo
          key={item.id}
          item={item}
          deleteItem={deleteItem}
          updateItem={updateItem}
        ></Todo>
      ))}
      </div>
    </div>
    </div>
  );
}

export default App;
