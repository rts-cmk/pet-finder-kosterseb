import { useNavigate } from 'react-router';
import './MiniProfileMenu.scss';

const MiniProfileMenu = ({ user, onClose }) => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/profile');
    onClose();
  };

  return (
    <>
      <div className="mini-profile-overlay" onClick={onClose}></div>
      <div className="mini-profile-menu">
        <div className="profile-header">
          {user && <img src={user.image} alt="Profile" />}
          <div className="profile-info">
            <h3>Welcome Back!</h3>
            <p>{user?.location}</p>
          </div>
        </div>
        
        <div className="menu-items">
          <button onClick={handleProfileClick}>
            <span className="icon">👤</span>
            <span>View Profile</span>
          </button>
          <button>
            <span className="icon">⚙️</span>
            <span>Settings</span>
          </button>
          <button>
            <span className="icon">❓</span>
            <span>Help & Support</span>
          </button>
          <button className="logout">
            <span className="icon">🚪</span>
            <span>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default MiniProfileMenu;