import React, {useContext, useState} from "react";
import styles from "./LoginModal.module.scss"
import {ModalContext} from "../../context/modal/modalContext";
import {useDispatch} from "react-redux";
import {userLogin} from "../../store/slices/userSlice";
import Modal from "../Modal";
import Input from "../Input";

export const LoginModal = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const {toggleModal} = useContext(ModalContext)
    const dispatch = useDispatch()
    const clearInputs = () => {
        setLogin('')
        setPassword('')
    }
    const submitHandler = (e) => {
        dispatch(userLogin({login, password}))
        toggleModal()
        clearInputs()
        e.preventDefault()
    }
    return (<Modal>
            <div className={styles.container}>
                <form className={styles.form} onSubmit={submitHandler} id={'form'}>
                    <div className={styles.login}>
                        <Input
                            type={'text'}
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                            label={'Логин'}
                        />
                        <Input
                            type={'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            label={'Пароль'}
                        />
                    </div>
                    <button type={"submit"} className={styles.formButton}>Войти</button>
                </form>
            </div>
        </Modal>
    )
}