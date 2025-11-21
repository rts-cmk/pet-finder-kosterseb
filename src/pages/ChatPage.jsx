import { useState } from 'react';
import './ChatPage.scss';
import ChatList from '../components/ChatPage/ChatList';
import ChatWindow from '../components/ChatPage/ChatWindow';

const ChatPage = ({ user }) => {
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div className="chat-page">
      {!selectedChat ? (
        <ChatList 
          user={user}
          onSelectChat={setSelectedChat}
        />
      ) : (
        <ChatWindow 
          chat={selectedChat}
          user={user}
          onBack={() => setSelectedChat(null)}
        />
      )}
    </div>
  );
};

export default ChatPage;