import React, { useState } from 'react';
import Dropdown from './Dropdown';

export default function Header({ profile, navigate }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="header">
      <img src="/images/logo.png" alt="Logo" className="logo" onClick={() => navigate('home')}/>
      <div className="profile-pic-container">
        <img
          src={`/images/${profile.profilePic}`} alt="Profile" className="profile-pic" onClick={() => setDropdownOpen((prev) => !prev)} aria-expanded={dropdownOpen}
        />
        {dropdownOpen && (
          <Dropdown profile={profile} navigate={navigate} />
        )}
      </div>
    </header>
  )};