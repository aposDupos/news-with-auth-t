import React from "react";
import styles from "./Modal.module.scss"
import {useModal} from "../../context/modal/ModalState";

export const Modal = ({children}) => {
    const {modal: {isActive}} = useModal()
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


