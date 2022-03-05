
import classes from './todo-list.module.css';
import Todo from '../todo/todo'

const TodoList = (props) => {

  const list = [
    {
      title: "test",
      date: "01/02/2022",
      description: "test"
    },
    {
      title: "test2",
      date: "02/02/2022",
      description: "test"
    },
  ]
  return (
    <div className={classes.wrapper}>
      <Todo />
    </div>
  )
};

export default TodoList;