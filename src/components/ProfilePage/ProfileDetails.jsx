import './ProfileDetails.scss';

const ProfileDetails = ({ user }) => {
  return (
    <div className="profile-details">
      <div className="profile-avatar">
        {user && <img src={user.image} alt="Profile" />}
        <button className="edit-avatar">📷</button>
      </div>

      <div className="profile-info">
        <div className="info-row">
          <label>Location</label>
          <p>{user?.location || 'Not set'}</p>
        </div>
        
        <div className="info-row">
          <label>Member Since</label>
          <p>January 2025</p>
        </div>
        
        <div className="info-row">
          <label>Pets Adopted</label>
          <p>0</p>
        </div>
      </div>

      <button className="edit-profile-button">
        Edit Profile
      </button>
    </div>
  );
};

export default ProfileDetails;