import React from 'react';
import styles from './Home.module.css';

export const Home = () => {
    return (
        <div className={styles.containerHome}>
            <h1 className={styles.title}>Football Players</h1>
            <h2 className={styles.subtitle}>Create your favorite players and your own team!</h2>
        </div>
    );
}
