import { NavLink } from 'react-router';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink 
        to="/" 
        className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
      >
        <span className="nav-icon">🏠</span>
        <span className="nav-label">Home</span>
      </NavLink>

      <NavLink 
        to="/chat" 
        className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
      >
        <span className="nav-icon">💬</span>
        <span className="nav-label">Chat</span>
      </NavLink>

      <NavLink 
        to="/favourites" 
        className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
      >
        <span className="nav-icon">❤️</span>
        <span className="nav-label">Favourites</span>
      </NavLink>

      <NavLink 
        to="/profile" 
        className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
      >
        <span className="nav-icon">👤</span>
        <span className="nav-label">Profile</span>
      </NavLink>
    </nav>
  );
};

export default Navbar;