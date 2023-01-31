import React from "react";
import './PaintingCard.css';

function PaintingCard({ painting }) {
    return (
        <div class="card">
            <h2>{painting.title}</h2>
            <img src={painting.imageSrc} alt={painting.title} />
            <h3>{painting.artist}</h3>
        </div>
    );
}

export default PaintingCard;