import classes from './search.module.css'

const Search = (props) => {
  const onChangeHandler = (event) => {
    props.searchHandler(event.target.value)
  }
  return (
    <form>
      <div className={classes.wrapper}>
        <label className={classes.label}>Search</label>
        <input type="text" onChange={onChangeHandler} />
      </div>
      <button>search</button>
    </form>
  )
};

export default Search;