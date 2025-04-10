import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [profile, setProfile] = useState({
    profilePic: 'pic1.png',
    username: 'jorts',
    actualName: 'Jorts McFluffy',
    dogFree: true
  });

  return (
    <div className="app">
      <Header profile={profile} navigate={setCurrentPage} />
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'profile' && (
        <ProfilePage profile={profile} setProfile={setProfile} />
      )}
    </div>
  );
}