import React from 'react';
import './Chat.sass';
import ChatWindow from '../components/ChatWindow/ChatWindow.jsx';
import ChatList from '../components/ChatList/ChatList.jsx';

export default function Chat() {
    return (
        <div className="chat-page">
        <ChatList />
        <ChatWindow />
        </div>
    );
    }