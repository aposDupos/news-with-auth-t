import React, {useState} from "react";
import styles from './Search.module.scss'
import Input from "../Input";
import {useDispatch, useSelector} from "react-redux";
import {setNews, setSearch} from "../../store/slices/newsSlice";

export const Search = () => {
    const [query, setQuery] = useState('')
    const dispatch = useDispatch()
    const onChange = e => {
        const value = e.target.value
        setQuery(value)
        dispatch(setSearch(value))
    }
    return (
        <div className={styles.search}>
            <Input
                label={'Поиск'}
                type={'text'}
                value={query}
                onChange={onChange}
            />
        </div>
    )
}