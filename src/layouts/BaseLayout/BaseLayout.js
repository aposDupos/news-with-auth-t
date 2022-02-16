import React from "react";
import {NavLink, Outlet} from 'react-router-dom'
import styles from './BaseLayout.module.scss'
import Logo from "../../components/Logo";
import classNames from "classnames";
import LoginButton from "../../components/LoginModal/LoginButton";
import LoginModal from "../../components/LoginModal";

export const BaseLayout = () => {
    const navLinks = [
        {
            path: '/',
            title: 'Главная'
        },
        {
            path: '/news',
            title: 'Новости'
        }
    ]
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Logo className={
                    classNames(
                        styles.headerItem,
                        styles.logo
                    )
                }/>
                <nav className={styles.nav}>
                    {
                        navLinks.map(({path, title}) => {
                            return <NavLink
                                className={({isActive}) =>
                                    isActive ? classNames(styles.navItemActive, styles.navItem) : styles.navItem
                                }
                                to={path}
                                key={path}
                            >
                                {title}
                            </NavLink>
                        })
                    }
                </nav>
                <div className={styles.login}>
                    <LoginButton className={styles.loginButton}/>
                    <LoginModal/>
                </div>
            </header>
            <Outlet/>
        </div>
)
}