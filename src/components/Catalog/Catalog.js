import styles from './Catalog.module.css'

import { usePlayerContext } from "../../contexts/FootballPlayerContext";

import { CatalogItem } from "./CatalogItem/CatalogItem";

export const Catalog = () => {
    const { players } = usePlayerContext();

    return (
        <section className={styles.catalog_page}>

            <h1 className={styles.catalog_title} >All Football Players</h1>

            {players.map(x =>
                <CatalogItem key={x._id} {...x} />
            )}

            {players.length === 0 && (
                <h2 className={styles.no_players}>No Football Players yet!</h2>
            )}

        </section>
    );
};