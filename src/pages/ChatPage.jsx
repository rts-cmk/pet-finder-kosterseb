import React from 'react';
import './ChatPage.scss';
import ChatWindow from '../components/ChatPage/ChatWindow.jsx';
import ChatList from '../components/ChatPage/ChatList.jsx';
import Navbar from '../components/Universal/Navbar.jsx';
import MiniProfileMenu from "../components/Universal/MiniProfileMenu.jsx";
import Notifications from "../components/Universal/Notifications.jsx";

export default function Chat() {
    return (
        <div className="chat-page">
            <Navbar />
            <MiniProfileMenu />
            <Notifications />
            <ChatList />
            <ChatWindow />
        </div>
    );
}