import styles from './CatalogItem.module.css';

import { Link } from "react-router-dom";


export const CatalogItem = ({
    _id,
    fullName,
    imageUrl
}) => {
    return (
        <div className={styles.allFootballPLayers}>
            <div className={styles.allFootballPlayers_info}>
                <h2>{fullName}</h2>
                <img src={imageUrl} alt='football player img' />
                <Link to={`/catalog/${_id}`} className={styles.button_info}>Details</Link>
            </div>
        </div>

    );
}