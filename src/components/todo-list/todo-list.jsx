
import classes from './todo-list.module.css';
import Todo from '../todo/todo'

const TodoList = (props) => {
  const filteredValues = props.items.filter(item => item.title.search(props.searchValue)!==-1)
  return (
    <div className={classes.wrapper}>
      {filteredValues.map((item, index) => {
        return <Todo
          key={index}
          title={item.title}
          description={item.description}
          date={item.date}
        />
      })}
    </div>
  )
};

export default TodoList;