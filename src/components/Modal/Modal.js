import React from "react";
import styles from "./Modal.module.scss"
import {useModal} from "../../context/modal/ModalState";
import {useSelector} from "react-redux";

export const Modal = ({children}) => {
    const {modal: {isActive}} = useModal()
    const {error} = useSelector(state => state.user)
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