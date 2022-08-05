import classes from 'styles/layout/MainNavigation.module.scss'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">github</Link>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : '')}
              to="/quotes"
            >
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : '')}
              to="/new-quote"
            >
              Add Quote
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : '')}
              to="/about"
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
