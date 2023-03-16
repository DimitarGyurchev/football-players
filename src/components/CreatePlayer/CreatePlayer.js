import styles from './CreatePlayer.module.css';
import React, { useState } from 'react';

export const CreatePlayer = () => {
    const [fullName, setFullName] = useState('');
    const [age, setAge] = useState('');
    const [nationality, setNationality] = useState('');
    const [position, setPosition] = useState('');
    const [image, setImage] = useState('');

    const handleFullNameChange = (event) => {
        setFullName(event.target.value);
    };

    const handleAgeChange = (event) => {
        setAge(event.target.value);
    };

    const handleNationalityChange = (event) => {
        setNationality(event.target.value);
    };

    const handlePositionChange = (event) => {
        setPosition(event.target.value);
    };

    const handleImageChange = (event) => {
        setImage(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Full Name: ${fullName}`);
        console.log(`Age: ${age}`);
        console.log(`Nationality: ${nationality}`);
        console.log(`Position: ${position}`);
        console.log(`Image: ${image}`);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h2 className={styles.heading}>Create Player</h2>
            <label className={styles.label}>
                Full Name:
                <input className={styles.input} type="text" value={fullName} onChange={handleFullNameChange} placeholder="Enter full name" />
            </label>
            <label className={styles.label}>
                Age:
                <input className={styles.ageInput} type="number" value={age} onChange={handleAgeChange} placeholder="Enter age" />
            </label>
            <label className={styles.label}>
                Nationality:
                <input className={styles.input} type="text" value={nationality} onChange={handleNationalityChange} placeholder="Enter nationality" />
            </label>
            <label className={styles.label}>
                Position:
                <input className={styles.input} type="text" value={position} onChange={handlePositionChange} placeholder="Enter position" />
            </label>
            <label className={styles.label}>
                Image:
                <input className={styles.input} type="text" value={image} onChange={handleImageChange} placeholder="Enter image URL" />
            </label>
            <button className={styles.button} type="submit">Create Player</button>
        </form>
    );
}
