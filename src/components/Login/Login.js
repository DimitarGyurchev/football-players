import styles from './Login.module.css';

import React, { useState } from 'react';
export const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Username: ${username} Password: ${password}`);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h2>Login</h2>
            <label htmlFor="username">Username:</label>
            <input
                className={styles.input}
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={handleUsernameChange}
            />

            <label htmlFor="password">Password:</label>
            <input
                className={styles.input}
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
            />

            <button className={styles.button} type="submit">Login</button>
        </form>



    );
}