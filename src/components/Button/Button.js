import React from "react";
import styles from './Button.module.scss'
import classNames from "classnames";

export const Button = ({text = '', onClick, className = null, disabled = false,type='button', children}) => {
    return (
        <button
            className={classNames(styles.button, className)}
            onClick={onClick}
            disabled={disabled}
        >
            {text || children}
        </button>
    )
}