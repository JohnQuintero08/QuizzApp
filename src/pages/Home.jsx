import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
    return (
        <section className="page-main">
            <h1>Quizzisimo</h1>
            <p>The best game to test your knowledge</p>
            <Link className='button-link button-start-game' to="game">Start game</Link>
        </section>
    )
}