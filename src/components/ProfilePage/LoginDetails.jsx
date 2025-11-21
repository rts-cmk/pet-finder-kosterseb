import './LoginDetails.scss';

const LoginDetails = ({ user }) => {
  return (
    <div className="login-details">
      <h2>Account Settings</h2>
      
      <div className="settings-list">
        <div className="setting-item">
          <div className="setting-info">
            <span className="setting-icon">📧</span>
            <div>
              <h3>Email</h3>
              <p>user@example.com</p>
            </div>
          </div>
          <button className="change-button">Change</button>
        </div>

        <div className="setting-item">
          <div className="setting-info">
            <span className="setting-icon">🔒</span>
            <div>
              <h3>Password</h3>
              <p>••••••••</p>
            </div>
          </div>
          <button className="change-button">Change</button>
        </div>

        <div className="setting-item">
          <div className="setting-info">
            <span className="setting-icon">📱</span>
            <div>
              <h3>Phone Number</h3>
              <p>Not set</p>
            </div>
          </div>
          <button className="change-button">Add</button>
        </div>

        <div className="setting-item">
          <div className="setting-info">
            <span className="setting-icon">🔔</span>
            <div>
              <h3>Notifications</h3>
              <p>Enabled</p>
            </div>
          </div>
          <label className="toggle-switch">
            <input type="checkbox" defaultChecked />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default LoginDetails;