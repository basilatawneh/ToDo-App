import classes from './search.module.css'

const Search = (props) => {
  return (
    <div className={classes.wrapper}>
      <label className={classes.label}>Search</label>
      <input type="text" />
    </div>
  )
};

export default Search;