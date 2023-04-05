import styles from "./NotFoundPage.module.css";

export const NotFoundPage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>404 Not Found</h1>
            <p className={styles.text}>The page you're looking for does not exist.</p>
        </div>
    );
};
