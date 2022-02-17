import React, {useContext} from "react";
import styles from './LoginButton.module.scss'
import classNames from "classnames";
import {ModalContext} from "../../../context/modal/modalContext";
import {useDispatch, useSelector} from "react-redux";
import {removeUser} from "../../../store/slices/userSlice";
import Button from "../../Button";

export const LoginButton = ({className}) => {
    const {toggleModal, modal} = useContext(ModalContext)
    const {login} = useSelector(state => state.user)
    const dispatch = useDispatch()
    const onClick = () => {
        if (login) {
            dispatch(removeUser())
        } else {
            toggleModal()
        }
    }
    return (<>
            <Button
                className={classNames(className, styles.button)}
                onClick={onClick}
                disabled={!!modal.isActive}
            >
                {!login ? 'Войти' : 'Выйти'}
            </Button>
        </>
    )
}