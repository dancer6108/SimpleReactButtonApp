import React from "react";
import TextField from "./TextField"
import classes from "../css/TextFieldsList.module.css"

const TextFieldList = (props) => {
    return (
        <div className={classes.fieldList}>
            <ul>
                {props.textFields.map((field) => (
                    <li key={field.id}>
                        <TextField text={field.textData} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TextFieldList;