import React, {useContext, useState} from "react";
import {Modal} from "../Modal/Modal";
import styles from "./LoginModal.module.scss"
import {ModalContext} from "../../context/modal/modalContext";
import {useDispatch} from "react-redux";
import {userLogin} from "../../store/slices/userSlice";

export const LoginModal = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const {toggleModal} = useContext(ModalContext)
    const dispatch = useDispatch()
    const submitHandler = (e) => {
        console.log(login, password)
        dispatch(userLogin({login, password}))
        toggleModal()
        e.preventDefault()
    }
    return (<Modal>
            <div className={styles.container}>
                <form className={styles.form} onSubmit={submitHandler} id={'form'}>
                    <div className={styles.login}>
                        <div className={styles.input}>
                            <label form={'form'} className={styles.inputLabel}>
                                Логин
                            </label>
                            <input
                                type={"text"}
                                value={login}
                                onChange={(e) => setLogin(e.target.value)}
                                className={styles.inputField}
                            />
                        </div>
                        <div className={styles.input}>
                            <label form={'form'} className={styles.inputLabel}>
                                Пароль
                            </label>
                            <input
                                type={"password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={styles.inputField}
                            />
                        </div>
                    </div>
                    <button type={"submit"} className={styles.formButton}>Войти</button>
                </form>
            </div>
        </Modal>
    )
}