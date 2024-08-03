import React, {useState} from "react";
import classes from "../css/TextField.module.css";
import Button from "./Button";

const TextField = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [textData, setTextData] = useState(props.text);
    const [error, setError] = useState("");

    const handleEdit = () => {
        setEditMode(current => !current);
    }

    const handleChange = (event) => {
        event.preventDefault();
        if (textData === "") {
            setError({
                message: "Value can't be blank."
            })
            return;
        }
        setTextData(textData);
        setEditMode(false);
    }
    const textChangeHandler = (event) => {
        setTextData(event.target.value);
    }
    const handleError = () => {
        setError(null);
    }

    return (
        <div>
            {!editMode && (
                <div className={classes.textMode}>
                    <input
                        className={classes.checkbox}
                        type="checkbox"
                    />
                    <p>{textData}</p>
                    <Button text="Edit" onClick={handleEdit} />
                </div>
            )}
            {editMode && (
                <form onSubmit={handleChange} className={classes.editMode}>
                    <input
                        id="editTextData"
                        className={classes.textInput}
                        type="text"
                        onChange={textChangeHandler}
                        value={textData}
                    />
                    <Button text="Confirm" type="submit" />
                </form>
            )}
            {error && (
                <div>
                    <p>{error.message}</p>
                    <Button text="Confirm" onClick={handleError} />
                </div>
            )}
        </div>
    );
};

export default TextField;