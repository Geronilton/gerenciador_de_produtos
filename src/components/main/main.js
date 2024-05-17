import React from "react";
import './main.css'
import Nav from './navcontent/navcontent'

// Reaproveitamente de estrutura
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <main>
            <div className="divContent">
                <Nav />
                <Outlet />
            </div>
        </main>
    )
}

export default Main;