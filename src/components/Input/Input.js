import React from "react";
import styles from "./Input.module.scss"
import classNames from "classnames";

export const Input = ({type, value, onChange, className, label}) => {
    return (
        <div className={classNames(styles.input, className)}>
            <label className={styles.inputLabel}>
                {label}
            </label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                className={styles.inputField}
            />
        </div>
    )
}