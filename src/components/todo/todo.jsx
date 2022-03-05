
import classes from './todo.module.css';

const Todo = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>My Todo</div>
      <div className={classes.content}>
        <div className={classes.description}>Create our component</div>
        <div>
          03/02/2002
        </div>
        <div className={classes.button}>
          <button >Delete</button>
        </div>
      </div>

    </div>
  )
};

export default Todo;