import styles from './EditPlayer.module.css'

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePlayerContext } from "../../contexts/FootballPlayerContext";

import { useForm } from "../../hooks/useForm";
import { useService } from "../../hooks/useService";
import { footballPlayerServiceFactory } from "../../services/footballPlayerService";

export const EditPlayer = () => {
    const { onPlayerEditSubmit } = usePlayerContext();
    const { playerId } = useParams;
    const footballPlayerService = useService(footballPlayerServiceFactory);
    const { values, changeHandler, onSubmit, changeValues } = useForm({
        _id: '',
        fullName: '',
        age: '',
        nationality: '',
        position: '',
        imageUrl: ''
    }, onPlayerEditSubmit);

    useEffect(() => {
        footballPlayerService.getOne(playerId)
            .then(result => {
                changeValues(result);
            })
    }, [playerId]);

    return (
        <section id="edit-page" className="auth">
            <form id="edit" method="post" onSubmit={onSubmit}>
                <div className="container">

                    <h1 className={styles.title_edit_player}>Edit Football Player</h1>
                    <label htmlFor="fullName">Fullname:</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={values.fullName}
                        onChange={changeHandler}
                    />

                    <label htmlFor="age">Age:</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        min="1"
                        value={values.age}
                        onChange={changeHandler}
                    />

                    <label htmlFor="nationality">Nationality:</label>
                    <input
                        type="text"
                        id="nationality"
                        name="nationality"
                        value={values.nationality}
                        onChange={changeHandler}
                    />

                    <label htmlFor="position">Position:</label>
                    <input
                        type="text"
                        id="position"
                        name="position"
                        value={values.position}
                        onChange={changeHandler}
                    />

                    <label htmlFor="imageUrl">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        value={values.imageUrl}
                        onChange={changeHandler}
                    />
                    <button type="submit" value="Edit Player">Edit Player</button>

                </div>
            </form>
        </section>
    );
}
