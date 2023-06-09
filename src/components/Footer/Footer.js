import styles from './Footer.module.css';
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerColumn}>
                    <h3>Dimitar Gyurchev</h3>
                    <p>Phone: 012-345-6789</p>
                    <p>Email: dimitar@gyurchev.com</p>
                </div>
                <div className={styles.footerColumn} id="follow">
                    <h3>Follow Us</h3>
                    <div className={styles.socialIcons}>
                        <ul>
                            <button type="button" role="link"><FontAwesomeIcon icon={faFacebookF} /></button>
                            <button type="button" role="link"><FontAwesomeIcon icon={faTwitter} /></button>
                            <button type="button" role="link"><FontAwesomeIcon icon={faInstagram} /></button>
                            <button type="button" role="link"><FontAwesomeIcon icon={faLinkedinIn} /></button>
                        </ul>
                    </div>

                </div>
            </div>
            <div className={styles.footerCopy}>
                <p>&copy; 2023 Dimitar Gyurchev. All Rights Reserved.</p>
            </div>
        </footer>
    );
};
