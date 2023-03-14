import styles from "./Navigation.module.css"

export const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><img id="img-nav" src="/images/Santiago-Bernabeu-Madrid.jpg" /></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">My Team</a></li>
                <li><a href="#">Register</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#">Logout</a></li>


            </ul>
        </nav>
    );
}