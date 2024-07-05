import React from 'react';
import Sidenav from '../components/sideNav';
import "../sass/Home.scss";
import NotificationIcon from "../images/notification.svg";
import ReminderIcon from "../images/reminder.svg";
import Image from 'next/image';
import SearchIcon from "../images/search.svg";
import UserProfile from "../images/head-shot-portrait-happy-african-260nw-1541223032.webp";
import Welcome from "../images/wave.jpg";

const HomePage = () => {
  return (
    <div className="dashboard">
      <div className="side-bar">
        <Sidenav />
      </div>
      <div className="content-container">
        <div className="content">
          <div className="header">
            <div className="search-bar">
              <div className="search-icon">
                <Image
                  src={SearchIcon}
                  alt="Search Icon"
                  width={30}
                  height={30}
                  quality={100}
                />
              </div>
              <input type="text" placeholder="Search anything here.." />
            </div>
            <div className="notifications">
              <div className="notification-icon">
                <Image
                  src={NotificationIcon}
                  alt="Notification Icon"
                  width={30}
                  height={30}
                  quality={100}
                />
              </div>
              <div className="notification-content">
                <p>Notifications</p>
              </div>
            </div>
            <div className="reminders">
              <div className="reminder-icon">
                <Image
                  src={ReminderIcon}
                  alt="Reminder Icon"
                  width={30}
                  height={30}
                  quality={100}
                />
              </div>
              <div className="reminder-content">
                <p>Reminders</p>
              </div>
            </div>
            <div className="user-profile">
              <div className="user-image">
                <Image
                  src={UserProfile}
                  alt="User Profile"
                  width={50}
                  height={50}
                  quality={100}
                />
              </div>
              <div className="user-name">
                <p>John Doe</p>
                <p>JohnDoe@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="welcome-message">
            <div className="image-welcome">
              <Image
                src={Welcome}
                alt="Welcome Image"
                width={1920}
                height={1080}
                quality={100}
                className="object-contain w-full h-full zooming-image"
              />
            </div>
            <div className="message">
              <h1>Good {
                new Date().getHours() < 12 ? 'Morning' : new Date().getHours() < 18 ? 'Afternoon' : 'Evening'
              } John Doe!</h1>
              <p>Welcome to your dashboard. Here, you can manage your appointments, view your notifications, and keep track of your progress.</p>
            </div>
          </div>

          <div className="stats-container">
            <div className="stat-box appointments">
              <h3>Appointments</h3>
              <p>200</p>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
