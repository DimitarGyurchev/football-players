import styles from "./Header.module.css"
import { Link } from 'react-router-dom'
export const Header = () => {
    return (

        <header>
            <nav>
                <div>
                    <Link to="/">Home</Link>
                </div>
                <div id="user">
                    <Link to="/catalog">All Football Players</Link>
                    <Link to="/create">Create Football Player</Link>
                    <Link to="/logout">Logout</Link>
                </div>
                <div id="guest">
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                </div>
            </nav>
        </header>
    );
}