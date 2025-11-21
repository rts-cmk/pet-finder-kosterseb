import './ProfilePage.scss';
import ProfileDetails from '../components/ProfilePage/ProfileDetails';
import LoginDetails from '../components/ProfilePage/LoginDetails';

const ProfilePage = ({ user }) => {
  return (
    <div className="profile-page">
      <h1>My Profile</h1>
      
      <ProfileDetails user={user} />
      <LoginDetails user={user} />
      
      <button className="logout-button">
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;