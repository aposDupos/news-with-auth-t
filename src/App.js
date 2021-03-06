import React from 'react';
import "./styles/main.scss"
import {Routes, Route} from 'react-router-dom'
import BaseLayout from "./layouts/BaseLayout";
import MainPage from "./pages/MainPage";
import NewsPage from "./pages/NewsPage";

function App() {
    return (
        <Routes>
            <Route element={<BaseLayout/>}>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path={'/news'} element={<NewsPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
