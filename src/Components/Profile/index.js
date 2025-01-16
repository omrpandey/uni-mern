import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './index.css';
import Footer from '../Fotter';

const Profile = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        alert(`Email: ${email}\nPassword: ${password}`);
    };

    return (
        <div className="profile-container">
            <div className="login-box">
                <h1 className="login-title">Log in</h1>
                
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
