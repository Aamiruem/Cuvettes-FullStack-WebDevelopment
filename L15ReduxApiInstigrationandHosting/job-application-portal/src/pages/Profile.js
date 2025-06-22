import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

const Profile = () => {
    const { user, setUser } = useContext(UserContext);
    const [formData, setFormData] = useState({
        username: user.username,
        email: user.email,
    });
    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(formData);
        setIsEditing(false);
    };

    return (
        <div className="profile-page">
            <h1>Your Profile</h1>

            {!isEditing ? (
                <div className="profile-info">
                    <p>Name: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <button onClick={() => setIsEditing(true)}>Edit Profile</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="profile-form">
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-actions">
                        <button type="submit">Save Changes</button>
                        <button type="button" onClick={() => setIsEditing(false)}>
                            Cancel
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default Profile;
