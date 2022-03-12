import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/nav';
import Search from './components/search/search';
import TodoList from './components/todo-list/todo-list';
import ToDoForm from './components/todo-form/todo-form';
import { useState } from 'react';
function App() {
  const [items, setItems] = useState([]);
  const addHandler = (toDoItem)=> {
    setItems((prev) => {
      return [...prev, toDoItem];
    })
  }
  return (
    <div>
       <Nav />
      <Search />
      <ToDoForm addHandler={addHandler}/>
      <TodoList items={items} />
    </div>
  );
}

export default App;
