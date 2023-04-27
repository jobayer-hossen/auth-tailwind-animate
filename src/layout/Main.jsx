import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { useState } from 'react';

const Main = () => {

    const [theme , setTheme] = useState("light-theme")
    const darkMode =()=>{
        if(theme === "dark-theme"){
            setTheme("light-theme")
        }else{
            setTheme("dark-theme")
        };
    };

    useEffect(()=>{
        document.body.className = theme ;
    },[theme]);

    return (
        <div>
            <Header darkMode={darkMode} ></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;