import React from "react";
import "./Nav.scss";
import {
  NavLink,
  Link
} from "react-router-dom";
class Nav extends React.Component {
  render() {
    return (
      <div className="topnav">
        <NavLink />
        <NavLink to="/">Home</NavLink>
        <NavLink to="/todo">Todos</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    )
  }
}

export default Nav