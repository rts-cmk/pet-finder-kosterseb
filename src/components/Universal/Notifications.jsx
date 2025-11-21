import './Notifications.scss';

const Notifications = ({ onClose }) => {
  const notifications = [
    {
      id: 1,
      type: 'message',
      title: 'New Message',
      message: 'You have a new message from the shelter',
      time: '5 minutes ago'
    },
    {
      id: 2,
      type: 'favourite',
      title: 'New Match',
      message: 'A Greyhound near you matches your preferences',
      time: '1 hour ago'
    },
    {
      id: 3,
      type: 'update',
      title: 'Profile Updated',
      message: 'Your profile has been successfully updated',
      time: '2 hours ago'
    }
  ];

  return (
    <>
      <div className="notifications-overlay" onClick={onClose}></div>
      <div className="notifications-panel">
        <div className="notifications-header">
          <h2>Notifications</h2>
          <button onClick={onClose}>✕</button>
        </div>
        
        <div className="notifications-list">
          {notifications.map(notification => (
            <div key={notification.id} className="notification-item">
              <div className="notification-icon">
                {notification.type === 'message' && '💬'}
                {notification.type === 'favourite' && '❤️'}
                {notification.type === 'update' && 'ℹ️'}
              </div>
              <div className="notification-content">
                <h3>{notification.title}</h3>
                <p>{notification.message}</p>
                <span className="notification-time">{notification.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Notifications;