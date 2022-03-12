
import classes from './todo-list.module.css';
import Todo from '../todo/todo'

const TodoList = (props) => {

  // const list = [
  //   {
  //     title: "test",
  //     date: "01/02/2022",
  //     description: "test"
  //   },
  //   {
  //     title: "test2",
  //     date: "02/02/2022",
  //     description: "test"
  //   },
  // ]
  return (
    <div className={classes.wrapper}>
      {props.items.map(item => {
        return <Todo
          title={item.title}
          description={item.description}
          date={item.date}
        />
      })}
    </div>
  )
};

export default TodoList;