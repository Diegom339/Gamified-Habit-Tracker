import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const THEME_KEY = 'habit-hero-theme';
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem(THEME_KEY) || 'light';
  });

  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    document.body.className = '';
    document.body.classList.add(`bg-${theme}`, `text-${theme === 'dark' ? 'light' : 'dark'}`);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-${theme} bg-${theme}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          🎯 Habit Hero
        </Link>

        <div className="d-flex align-items-center gap-2">
          <button
            onClick={toggleTheme}
            className={`btn btn-sm btn-${theme === 'dark' ? 'light' : 'dark'}`}
          >
            {theme === 'dark' ? '☀ Light' : '🌙 Dark'}
          </button>

          {currentUser ? (
            <button
              onClick={handleLogout}
              className={`btn btn-sm btn-${theme === 'dark' ? 'light' : 'dark'}`}
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className={`btn btn-sm btn-outline-${theme === 'dark' ? 'light' : 'dark'}`}
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
