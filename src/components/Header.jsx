import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AiFillAliwangwang, AiFillHome,  AiFillSetting } from "react-icons/ai";
import { IconContext } from "react-icons";

export default function Header(){
    return (
        <IconContext.Provider value={{className: "icon"}}>
            <header>
                <NavLink to="/settings"><AiFillSetting /></NavLink>
                <AiFillAliwangwang />
                <NavLink to="/"><AiFillHome /></NavLink>
            </header>
        </IconContext.Provider>
    )
}