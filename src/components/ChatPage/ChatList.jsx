import './ChatList.scss';

const ChatList = ({ user, onSelectChat }) => {
  const chats = [
    {
      id: 1,
      name: 'Happy Paws Shelter',
      lastMessage: 'The Greyhound is still available!',
      time: '10:30 AM',
      unread: 2,
      avatar: '🏠'
    },
    {
      id: 2,
      name: 'Atlanta Pet Rescue',
      lastMessage: 'Thank you for your interest',
      time: 'Yesterday',
      unread: 0,
      avatar: '🐕'
    },
    {
      id: 3,
      name: 'Pet Adoption Center',
      lastMessage: 'Would you like to schedule a visit?',
      time: 'Tuesday',
      unread: 1,
      avatar: '🏡'
    }
  ];

  return (
    <div className="chat-list">
      <div className="chat-list-header">
        <h1>Messages</h1>
      </div>

      <div className="chats">
        {chats.map(chat => (
          <div 
            key={chat.id}
            className="chat-item"
            onClick={() => onSelectChat(chat)}
          >
            <div className="chat-avatar">{chat.avatar}</div>
            <div className="chat-content">
              <div className="chat-header">
                <h3>{chat.name}</h3>
                <span className="chat-time">{chat.time}</span>
              </div>
              <div className="chat-preview">
                <p>{chat.lastMessage}</p>
                {chat.unread > 0 && (
                  <span className="unread-badge">{chat.unread}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;