import React from 'react';
import EditField from './EditField';

export default function ProfilePage({ profile, setProfile }) {
  return (
    <main className="profile">
      <h2>Profile Settings</h2>
      <EditField
        label="Profile Picture"
        type="select"
        value={profile.profilePic}
        options={['pic1.png', 'pic2.png', 'pic3.png']}
        onSave={(val) => setProfile({ ...profile, profilePic: val })}
      />
      <EditField
        label="Username"
        type="text"
        value={profile.username}
        onSave={(val) => setProfile({ ...profile, username: val })}
      />
      <EditField
        label="Actual Name"
        type="text"
        value={profile.actualName}
        onSave={(val) =>
          setProfile({
            ...profile,
            actualName: val || profile.username
          })
        }
      />
      <EditField
        label="Verified Dog Free"
        type="checkbox"
        value={profile.dogFree}
        onSave={(val) => setProfile({ ...profile, dogFree: val })}
      />
    </main>
  );
}