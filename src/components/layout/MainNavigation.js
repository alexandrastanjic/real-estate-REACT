import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  return <header className={classes.header}>
    <div className={classes.logo}>Real Estate</div>
    <nav className={classes.nav}>
      <ul className={classes.ul}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/properties'>Properties</Link>
        </li>
        <li>
          <Link to='/favorites'>My Favorties</Link>
        </li>
      </ul>
    </nav>
  </header>;
}

export default MainNavigation;