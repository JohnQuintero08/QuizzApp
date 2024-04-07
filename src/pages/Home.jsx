import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
    return (
        <section className="page-main">
            <h1>Quizzcal</h1>
            <p>The best game to test your knowledge</p>
            <Link className='button-start-game' to="game">Star game</Link>
        </section>
    )
}