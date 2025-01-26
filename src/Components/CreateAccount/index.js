import React, { useState } from 'react';
import './index.css'; // Use the same CSS file

const CreateAccount = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleCreateAccount = async () => {
        // Clear any previous messages
        setErrorMessage('');
        setSuccessMessage('');
    
        const userName = `${firstName} ${lastName}`;
        const userId = Math.floor(Math.random() * 1000000000); // Numeric userId
    
        try {
            const response = await fetch('http://localhost:5000/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userName, email, password, userId }),
            });
    
            if (response.ok) {
                const data = await response.json();
                setSuccessMessage('Account created successfully!');
                console.log('User created:', data);
                // Clear input fields
                setFirstName('');
                setLastName('');
                setEmail('');
                setPassword('');
            } else {
                const errorData = await response.json();
                setErrorMessage(errorData.error || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            setErrorMessage('Unable to connect to the server. Please try again later.');
            console.error('Error:', error);
        }
    };
    

    return (
        <div className="profile-container">
            <div className="login-box">
                <h1 className="login-title">Create Account</h1>
                
                {/* First Name */}
                <label htmlFor="firstName" className="input-label">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
                
                {/* Last Name */}
                <label htmlFor="lastName" className="input-label">Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
                
                {/* Email */}
                <label htmlFor="email" className="input-label">Email</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                
                {/* Password */}
                <label htmlFor="password" className="input-label">Password</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                
                {/* Create Account Button */}
                <button className="login-button" onClick={handleCreateAccount}>Create Account</button>
            </div>
        </div>
    );
};

export default CreateAccount;
