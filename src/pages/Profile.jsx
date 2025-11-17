import React from "react";
import Navbar from "../components/Universal/Navbar";
import ProfileDetails from "../components/ProfilePage/ProfileDetails";
import LoginDetails from "../components/ProfilePage/LoginDetails";
import './Profile.sass';

export default function Profile() {
    return (
        <div className="profile-page">
            <Navbar />
            <div className="profile-content">
                <ProfileDetails />
                <LoginDetails />
            </div>
        </div>
    );
}