
import classes from './todo.module.css';

const Todo = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>{props.title}</div>
      <div className={classes.content}>
        <div className={classes.description}>{props.description}</div>
        <div>
          {props.date}
        </div>
        <div className={classes.button}>
          <button >Delete</button>
        </div>
      </div>

    </div>
  )
};

export default Todo;