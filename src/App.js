import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/nav';
import Search from './components/search/search';
import TodoList from './components/todo-list/todo-list';
import ToDoForm from './components/todo-form/todo-form';
import { useState, useEffect } from 'react';
function App() {
  const [items, setItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const API = 'https://expenses-project-2e3d1-default-rtdb.firebaseio.com/toDo.json';

  const getData = () => {
    fetch(API)
      .then(res => res.json())
      .then(res => {
        const finalExpenses = [];
        for (let expens in res) {
          finalExpenses.push({
            ...res[expens]
          });
        }

        setItems(finalExpenses)
      })
  }

  useEffect(() => {
    getData();
  }, []);
  const addHandler = (toDoItem) => {
    const options = {
      method: 'POST',
      body: JSON.stringify(toDoItem)
    }
    fetch(API, options)
      .then(res => res.json())
      .then(res => {
        getData();
      })
    // setItems((prev) => {
    //   return [...prev, toDoItem];
    // })
  }

  const searchHandler = (value) => {
    setSearchValue(value);
  }

  return (
    <div>
      <Nav />
      <Search searchValue={searchValue} searchHandler={searchHandler} />
      <ToDoForm addHandler={addHandler} />
      <TodoList items={items} searchValue={searchValue} />
    </div>
  );
}

export default App;
