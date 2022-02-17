import React, {useState} from "react";
import Input from "../Input";
import Button from "../Button";
import dayjs from "dayjs";
import styles from './NewsForm.module.scss'
import {useDispatch} from "react-redux";
import {createNews} from "../../store/slices/newsSlice";

export const NewsForm = () => {
    const [title, setTitle] = useState('')
    const [description, setDesc] = useState('')
    const dispatch = useDispatch()
    const onSubmit = (e) => {
        const createdAt = dayjs().format('DD.MM.YYYY')
        const payload = {
            title,
            description,
            createdAt,
            isApproved: false,
            url: ''
        }
        dispatch(createNews(payload))
        e.preventDefault()
    }
    return (
        <div className={styles.container}>
            <form onSubmit={onSubmit} className={styles.form}>
                <Input
                    label={'Заголовок'}
                    value={title}
                    type={'text'}
                    onChange={e => setTitle(e.target.value)}
                    className={styles.formItem}
                />
                <Input
                    label={'Текст'}
                    value={description}
                    type={'text'}
                    onChange={e => setDesc(e.target.value)}
                    className={styles.formItem}
                />
                <Button text={'Добавить'} type={'submit'} className={styles.button}/>
            </form>
        </div>
    )
}