import React, {useState} from "react";
import Button from "./Button";
import classes from "../css/AddFields.module.css";

const AddField = (props) => {
    const [textData, setTextData] = useState("");
    const [error, setError] = useState("");

    const addFieldHandler = (event) => {
        event.preventDefault();
        if (textData === "") {
            setError({
                title: "Invalid Data",
                message: "Blank submissions not accepted."
            });
            return;
        }
        props.onAddField(textData);
        setTextData("");
    }
    const textChangeHandler = (event) => {
        setTextData(event.target.value);
    }
    const errorHandler = () => {
        setError(null);
    }
    return (
        <div className={classes.addField}>
            <form onSubmit={addFieldHandler}>
                <input
                    id="textdata"
                    type="text"
                    value={textData}
                    onChange={textChangeHandler}
                    placeholder="New Text Data..."
                />
                <Button type="submit" text="Add Field" />
            </form>
            {error && (
                <div>
                    <h2>{error.title}</h2>
                    <p>{error.message}</p>
                    <Button text="confirm" onClick={errorHandler} />
                </div>
            )}
        </div>
    );
};

export default AddField;