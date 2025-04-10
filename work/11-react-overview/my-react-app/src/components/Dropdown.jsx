import React from 'react';

export default function Dropdown({ profile, navigate }) {
  return (
    <div className="dropdown">
      <p className={profile.dogFree ? 'fabulous' : ''}>
        {profile.username}
      </p>
      <button onClick={() => navigate('profile')}>Profile Settings</button>
    </div>
  );
}