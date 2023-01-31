import React from "react";
import './PaintingCard.css';

function PaintingCard({ painting }) {
    return(
        <div classname="card">
            <h2>{painting.title}</h2>
            <img src={painting.imageSrc} alt={painting.title}/>
            <h3>Artist: {painting.artist}</h3>
        </div>
    );
}

export default PaintingCard;