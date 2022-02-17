import React from "react";
import styles from './NewsCard.module.scss'
import Button from "../../Button";
import {useDispatch, useSelector} from "react-redux";
import {removeOneNews} from "../../../store/slices/newsSlice";

export const NewsCard = ({newsItem}) => {
    const {isAdmin} = useSelector(state => state.user)
    const dispatch = useDispatch()
    const onClick = () => {
        dispatch(removeOneNews(newsItem.id))
    }
    return (
        <div className={styles.card}>
            <div className={styles.top}>
                <a href={newsItem.url} className={styles.cardHeading} target={"_blank"}>
                    {newsItem.title}
                </a>
                <div className={styles.cardDesc}>
                    {newsItem.description}
                </div>
            </div>
            <div className={styles.cardDate}>
                {newsItem.createdAt}
            </div>
            {isAdmin &&
            <Button
                text={'Удалить'}
                className={styles.cardButton}
                onClick={onClick}
            />}
        </div>
    )
}