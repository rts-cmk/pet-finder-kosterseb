import React from "react";
import Navbar from "../components/Universal/Navbar";
import AnimalList from "../components/HomePage/AnimalList";
import Category from "../components/HomePage/Category";
import Location from "../components/HomePage/Location";
import MiniProfileMenu from "../components/HomePage/MiniProfileMenu";
import Notifications from "../components/HomePage/Notifications";
import AnimalDetails from "../components/Universal/AnimalDetails";
import './Home.sass';

export default function Home() {
    return (
        <div className="home-page">
            <Navbar />
            <div className="home-content">
                <aside className="home-sidebar-left">
                    <MiniProfileMenu />
                    <Category />
                    <Location />
                </aside>
                <main className="home-main-content">
                    <AnimalList />
                    <AnimalDetails />
                </main>
                <aside className="home-sidebar-right">
                    <Notifications />
                </aside>
            </div>
        </div>
    );
}