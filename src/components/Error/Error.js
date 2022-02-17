import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setError} from "../../store/slices/userSlice";
import styles from './Error.module.scss'

export const Error = () => {
    const {error} = useSelector(state => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        if (error) {
            setTimeout(() => {
                dispatch(setError(''))
            }, 3000)
        }
    }, [error])
    return (
        <>
            {error &&
            <div className={styles.container}>
                <div className={styles.error}>{error}</div>
            </div>}
        </>
    )
}