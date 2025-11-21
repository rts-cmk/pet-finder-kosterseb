import React from "react";
import Navbar from "../components/Universal/Navbar";
import MiniProfileMenu from "../components/Universal/MiniProfileMenu";
import Notifications from "../components/Universal/Notifications";
import ProfileDetails from "../components/ProfilePage/ProfileDetails";
import LoginDetails from "../components/ProfilePage/LoginDetails";
import './ProfilePage.scss';

export default function Profile() {
    return (
        <div className="profile-page">
            <Navbar />
            <MiniProfileMenu />
            <Notifications />
            <div className="profile-content">
                <ProfileDetails />
                <LoginDetails />
            </div>
        </div>
    );
}