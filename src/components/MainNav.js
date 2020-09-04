import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const MainNav = (props) => {
  return (
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="#">Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/">Product</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/register">Register</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/create">Create Product</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/cart">Cart</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/transactions">Transactions</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/admin">Admin</NavLink>
      </li>
    </ul>
  </div>
</nav>

  )
}

export default MainNav;