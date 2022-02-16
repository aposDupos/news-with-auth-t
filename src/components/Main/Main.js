import React from "react";
import styles from "./Main.module.scss"
import {useSelector} from "react-redux";

export const Main = () => {
    const {name} = useSelector(state => state.user)
    return (
        <div className={styles.content}>
            <div className={styles.contentItem}>Привет, {!!name ? name : 'Гость'}!</div>
            <div className={styles.contentItem}></div>
        </div>
    )
}