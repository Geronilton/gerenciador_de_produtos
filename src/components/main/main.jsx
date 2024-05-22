import React from "react";
import './main.css'
import NavContent from './navcontent/navcontent'
import Header from './header/header'

// Reaproveitamente de estrutura
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
  <div className="divContent">
    <Header />
        <main>
            <NavContent />
            <Outlet />
        </main>
  </div>
    )
}

export default Main;