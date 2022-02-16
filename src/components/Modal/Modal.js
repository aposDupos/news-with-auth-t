import React, {useContext} from "react";
import {ModalContext} from "../../context/modal/modalContext";
import styles from "./Modal.module.scss"

export const Modal = ({children}) => {
    const {modal: {isActive}} = useContext(ModalContext)
    return (
        <>
            {isActive &&
            <div className={styles.container}>
                {children}
            </div>
            }
        </>

    )
}