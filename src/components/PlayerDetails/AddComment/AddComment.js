import { useForm } from "../../../hooks/useForm";

export const AddComment = ({
    onCommentSubmit
}) => {
    const { values, changeHandler, onSubmit } = useForm({
        comment: ''
    }, onCommentSubmit);

    return (
        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form" onSubmit={onSubmit}>
                <textarea name="comment" placeholder="Write your comment" value={values.comment} onChange={changeHandler}></textarea>
                <button type="submit" value="Add Comment">Add Comment</button>
            </form>
        </article>
    );
}