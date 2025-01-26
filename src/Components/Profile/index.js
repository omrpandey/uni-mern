import React, { useState, useEffect } from 'react'; // Added useEffect
import { Link } from 'react-router-dom'; // Import Link for navigation
import './index.css';
import axios from 'axios';

const Profile = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userId, setUserId] = useState(2); // Assuming userId is set to 1 for example (replace this with the real userId from session or login)
    const [user, setUser] = useState(null); // Use a single state to store the user object
    

    useEffect(() => {
        if (userId) {
            axios
                .get(`http://localhost:5000/api/users/${userId}`)
                .then((response) => {
                    // Assuming the response is an object, not an array
                    setUser(response.data);
                  
                })
                .catch((error) => {
                    console.error('Error fetching User:', error);
                });
        }
    }, [userId]);

    const handleLogin = () => {
        alert(`Email: ${email}\nPassword: ${password}`);
    };

    return (
        <div className="profile-container">
            <div className="login-box">
                <h1 className="login-title">Log in</h1>
                
                {/* Display user data if available */}
                {user && (
                    <div className="user-info">
                        <h3>Welcome, {user.userName}</h3> {/* Display user name */}
                        <p>Email: {user.email}</p> {/* Display email */}
                    </div>
                )}

                {/* Email Section */}
                <label htmlFor="email" className="input-label">EMAIL</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                {/* Password Section */}
                <label htmlFor="password" className="input-label">PASSWORD</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                {/* Forgot Password Link */}
                <div className="forgot-password">
                    <Link to="/forgot-password">Forgot Password?</Link>
                </div>

                {/* Login Button */}
                <button className="login-button" onClick={handleLogin}>Sign In</button>

                {/* Create Account Section */}
                <p className="create-account">
                    <Link to="/create-account">Create Account</Link>
                </p>
            </div>
        </div>
    );
};

export default Profile;
