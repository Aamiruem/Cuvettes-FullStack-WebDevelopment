import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function UserProfile() {
    const { user } = useContext(UserContext);

    return (
        <div className="user-profile">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.address}</p>
        </div>
    );
}

export default UserProfile;
