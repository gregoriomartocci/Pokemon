import React from 'react'
import Card from "../Card/Card.js"
import "./Cards.css"

function Cards() {
    return (
        <div className="cards"><h3 className="titulo">Estas son las tarjetas</h3>
            <div className="cardsContainter">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </div>
        </div>
    )
}

export default Cards
