import styles from "./Header.module.css"

import { useContext } from 'react';
import { Link } from 'react-router-dom'

import { AuthContext } from '../../contexts/AuthContext';

export const Header = () => {

    const { isAuthenticated, userEmail } = useContext(AuthContext);

    return (

        <header className={styles.header}>
            <nav>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/catalog">All Football Players</Link>
                </div>
                {isAuthenticated && (
                    <div id="user">
                        <span id="userEmail">Welcome: {userEmail}</span>
                        <Link to="/create">Create Football Player</Link>
                        <Link to="/logout">Logout</Link>
                    </div>
                )}

                {!isAuthenticated && (
                    <div id="guest">
                        <Link to="/register">Register</Link>
                        <Link to="/login">Login</Link>
                    </div>
                )}
            </nav>
        </header>
    );
}