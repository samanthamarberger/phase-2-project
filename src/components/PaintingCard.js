import React from "react";

function PaintingCard({ painting }) {
    return(
        <div>
            <h2>{painting.title}</h2>
            <img src={painting.imageSrc} alt={painting.title}/>
            <h3>Artist: {painting.artist}</h3>
        </div>
    );
}

export default PaintingCard;