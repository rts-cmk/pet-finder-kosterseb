import { useState } from 'react';
import './ChatWindow.scss';

const ChatWindow = ({ chat, user, onBack }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'them',
      text: 'Hello! Thank you for your interest in our pets.',
      time: '10:00 AM'
    },
    {
      id: 2,
      sender: 'me',
      text: 'Hi! I\'m interested in the Greyhound.',
      time: '10:15 AM'
    },
    {
      id: 3,
      sender: 'them',
      text: 'The Greyhound is still available! Would you like to schedule a visit?',
      time: '10:30 AM'
    }
  ]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: 'me',
        text: message,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  return (
    <div className="chat-window">
      <div className="chat-window-header">
        <button className="back-button" onClick={onBack}>
          ←
        </button>
        <div className="chat-info">
          <div className="chat-avatar">{chat.avatar}</div>
          <h2>{chat.name}</h2>
        </div>
      </div>

      <div className="messages">
        {messages.map(msg => (
          <div 
            key={msg.id}
            className={`message ${msg.sender === 'me' ? 'sent' : 'received'}`}
          >
            <div className="message-bubble">
              <p>{msg.text}</p>
              <span className="message-time">{msg.time}</span>
            </div>
          </div>
        ))}
      </div>

      <form className="message-input" onSubmit={handleSendMessage}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatWindow;