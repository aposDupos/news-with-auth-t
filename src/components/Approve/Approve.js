import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {ApproveButton} from "./ApproveButton";
import NewsCard from "../News/NewsCard";
import styles from './Approve.module.scss'

export const Approve = () => {
    const {news} = useSelector(state => state.news)

    return <div className={styles.approve}>
        {
            news
                .filter(item => !item.isApproved)
                .map(item => (
                    <div className={styles.approveItem} key={item.id}>
                        <NewsCard newsItem={item}/>
                        <ApproveButton id={item.id}/>
                    </div>
                ))
        }
    </div>
}