import styles from "./CreateFootballPlayer.module.css"

import { usePlayerContext } from '../../contexts/FootballPlayerContext';
import { useForm } from '../../hooks/useForm';


export const CreateFootballPlayer = () => {
    const { onCreatePlayerSubmit } = usePlayerContext();
    const { values, changeHandler, onSubmit } = useForm({
        fullName: '',
        age: '',
        nationality: '',
        position: '',
        imageUrl: ''
    }, onCreatePlayerSubmit);

    return (
        <form className={styles.form} method="post" onSubmit={onSubmit}>
            <h2 className={styles.heading}>Create Player</h2>
            <label className={styles.label}>
                Full Name:
                <input className={styles.input} value={values.fullName} onChange={changeHandler} type="text" id="fullName" name="fullName" placeholder="Enter full name" />
            </label>
            <label className={styles.label}>
                Age:
                <input className={styles.ageInput} value={values.age} onChange={changeHandler} type="number" id="age" name="age" min="1" placeholder="Enter age" />
            </label>
            <label className={styles.label}>
                Nationality:
                <input className={styles.input} value={values.nationality} onChange={changeHandler} type="text" id="nationality" name="nationality" placeholder="Enter nationality" />
            </label>
            <label className={styles.label}>
                Position:
                <input className={styles.input} value={values.position} onChange={changeHandler} type="text" id="position" name="position" placeholder="Enter position" />
            </label>
            <label className={styles.label}>
                Image:
                <input className={styles.input} value={values.imageUrl} onChange={changeHandler} type="text" id="imageUrl" name="imageUrl" placeholder="Enter image URL" />
            </label>
            <button className={styles.button} type="submit" value="Create Player">Create Player</button>
        </form>
    );
}
