import React, {useEffect} from "react";
import {fetchNews} from "../../store/slices/newsSlice";
import {useDispatch, useSelector} from "react-redux";
import styles from './News.module.scss'
import NewsCard from "./NewsCard";
import Approve from "../Approve";
import NewsForm from "../NewsForm";
import Search from "../Search";
import {searchFilter} from "../../utils/api";

export const News = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchNews())
    }, [])
    const {news, search} = useSelector(state => state.news)
    const {isAdmin, login} = useSelector(state => state.user)
    return (
        <>
            <Search/>
            {!!login ? isAdmin ? <Approve/> : <NewsForm/> : undefined}
            <div className={styles.container}>
                {searchFilter(news, search)
                    .filter(item => item.isApproved)
                    .map(item => <NewsCard key={item.id} newsItem={item}/>)
                }
            </div>
        </>
    )
}