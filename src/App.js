import React from 'react';
import "./styles/main.scss"
import {Routes, Route} from 'react-router-dom'
import {Main} from "./pages/Main";
import {News} from "./pages/News";
import BaseLayout from "./layouts/BaseLayout";

function App() {
    return (
        <Routes>
            <Route element={<BaseLayout/>}>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/news'} element={<News/>}/>
            </Route>
        </Routes>
    );
}

export default App;
