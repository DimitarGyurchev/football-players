import React, { useState } from 'react';
import styles from './RegistrationForm.module.css';

export const RegistrationForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`First name: ${firstName}`);
        console.log(`Last name: ${lastName}`);
        console.log(`Email: ${email}`);
        console.log(`Password: ${password}`);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.registrationForm}>
            <h2>Register</h2>
            <div className={styles.formGroup}>
                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={firstName}
                    onChange={handleFirstNameChange}
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="lastName">Last Name:</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={lastName}
                    onChange={handleLastNameChange}
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                    minLength="8"
                    required
                />
            </div>
            <button type="submit">Register</button>
        </form>
    );
};
