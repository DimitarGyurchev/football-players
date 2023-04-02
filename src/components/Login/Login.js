import styles from './Login.module.css';

import { useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

const LoginFormKeys = {
    Email: 'email',
    Password: 'password'
};

export const Login = ({
}) => {
    const { onLoginSubmit } = useAuthContext();
    const { values, changeHandler, onSubmit } = useForm({
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    }, onLoginSubmit);

    return (
        <form className={styles.form} method="POST" onSubmit={onSubmit}>
            <h2>Login</h2>
            <label htmlFor="username">Email:</label>
            <input
                className={styles.input}
                type="username"
                id="username"
                name={LoginFormKeys.Email}
                value={values[LoginFormKeys.Email]}
                onChange={changeHandler}
            />

            <label htmlFor="password">Password:</label>
            <input
                className={styles.input}
                type="password"
                id="password"
                name={LoginFormKeys.Password}
                value={values[LoginFormKeys.Password]}
                onChange={changeHandler}
            />

            <button className={styles.button} type="submit" value="Login">Login</button>
        </form>



    );
}