import React from 'react'
import "./Card.css"

function Card({pokemon}) {
    return (
        <div className="card">
            Nombre: {pokemon.name}
    
        </div>
    )
}

export default Card
