import { useContext } from "react";
import styles from './Registration.module.css';

import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";


export const Registration = () => {
    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: '',
        confirmPassword: '',
    }, onRegisterSubmit);

    return (
        <form className={styles.registrationForm} method="post" onSubmit={onSubmit}>
            <h2>Register</h2>
            <div className={styles.formGroup}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="dimi@email.com"
                    value={values.email}
                    onChange={changeHandler}
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={values.password}
                    onChange={changeHandler}
                    minLength="6"
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={values.confirmPassword}
                    onChange={changeHandler}
                    minLength="6"
                    required
                />
            </div>
            <button type="submit">Register</button>
        </form>
    );
};
