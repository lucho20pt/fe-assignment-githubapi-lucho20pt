import classes from 'styles/layout/MainNavigation.module.scss'
import { Link, NavLink } from 'react-router-dom'
// import { useSelector } from 'react-redux'
import { useAppSelector } from 'app/hooks'

const Header = () => {
  const userId = useAppSelector((state) => state.github.users[0].id)

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">github</Link>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : '')}
              to="/search"
            >
              Search
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : '')}
              to={`/user/${userId}/`}
            >
              User
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
    </header>
  )
}

export default Header
