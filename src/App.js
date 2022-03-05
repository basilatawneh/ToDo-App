import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/nav';
import Search from './components/search/search';
import TodoList from './components/todo-list/todo-list';
function App() {
  return (
    <div>
       <Nav />
      <Search />
      <TodoList />
    </div>
  );
}

export default App;
