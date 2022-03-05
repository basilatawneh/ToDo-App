
import classes from './nav.module.css'
import Search from '../search/search'
const Nav = (props) => {
  return (
    <div className={classes.wrapper}>


      <div className={classes.navItem}>Home</div>
      <div className={classes.navItem}>product</div>
      <div className={classes.navItem}>about us</div>
      <img src='/images/Ptuk.jpg' className={classes.image} />
    </div>
  )
};

export default Nav;