import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import login from '../styles/login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Email and password are required');
            return;
        }

        setError('');
        setMessage('');

        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(`${data.message}. Welcome ${data.role}.`);

                // Extract username before '@'
                const username = email.split('@')[0];

                // Store in localStorage
                localStorage.setItem('email', email);
                localStorage.setItem('name', username);

                // Redirect based on role
                if (data.role === 'user') {
                    navigate('/');        // to event/home page
                } else if (data.role === 'admin') {
                    navigate('/admin-dashboard'); // to admin dashboard
                }
            } else {
                setError(data.error);
            }
        } catch (err) {
            console.error('Login error:', err);
            setError('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>

            {error && (
                <>
                    <p style={{ color: 'red' }}>{error}</p>
                </>
            )}

            {message && <p style={{ color: 'green' }}>{message}</p>}

            {/* Registration Button always visible */}
            <div>
                <button
                    onClick={() => navigate('/register')}
                    style={{
                        marginTop: '1rem',
                        backgroundColor: '#10b981',
                        color: '#fff',
                        padding: '8px 16px',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                    }}
                >
                    Register New Account
                </button>
            </div>
        </div>
    );
}

export default Login;
