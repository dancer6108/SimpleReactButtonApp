import React from "react";
import classes from "../css/Button.module.css";

const Button = (props) => {
    return (
        <button
            className={classes.button}
            type={props.type || "button"}
            onClick={props.onClick}
        >{props.text}</button>
    );
}

export default Button;