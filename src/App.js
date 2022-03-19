import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/nav';
import Search from './components/search/search';
import TodoList from './components/todo-list/todo-list';
import ToDoForm from './components/todo-form/todo-form';
import { useState } from 'react';
function App() {
  const [items, setItems] = useState([]);
  const [searchValue, setSearchValue] = useState('')

  const addHandler = (toDoItem)=> {
    setItems((prev) => {
      return [...prev, toDoItem];
    })
  }

  const searchHandler = (value) => {
    setSearchValue(value);
  }

  return (
    <div>
       <Nav />
      <Search searchValue={searchValue} searchHandler={searchHandler}  />
      <ToDoForm addHandler={addHandler}/>
      <TodoList items={items} searchValue={searchValue} />
    </div>
  );
}

export default App;
