import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          🎯 Habit Hero
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
