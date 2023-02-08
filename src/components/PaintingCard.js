import React from "react";
import './PaintingCard.css';

function PaintingCard({ painting }) {
    return (
        <div className="card">
            <h2>{painting.title}</h2>
            <br/>
            <img src={painting.imageSrc} alt={painting.title} />
            <br/>
            <h3>{painting.artist}</h3>
        </div>
    );
}

export default PaintingCard;