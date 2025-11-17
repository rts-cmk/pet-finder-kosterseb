import React from 'react';
import './Chat.sass';
import ChatWindow from '../components/ChatPage/ChatWindow.jsx';
import ChatList from '../components/ChatPage/ChatList.jsx';
import Navbar from '../components/Universal/Navbar.jsx';

export default function Chat() {
    return (
        <div className="chat-page">
            <Navbar />
            <ChatList />
            <ChatWindow />
        </div>
    );
}