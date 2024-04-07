import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AiFillAliwangwang, AiFillHome } from "react-icons/ai";
import { IconContext } from "react-icons";

export default function Header(){
    return (
        <IconContext.Provider value={{size: '3rem', color: '#4D5B9E'}}>
            <header>
                <AiFillAliwangwang />
                <NavLink to="/"><AiFillHome/></NavLink>
            </header>
        </IconContext.Provider>
    )
}