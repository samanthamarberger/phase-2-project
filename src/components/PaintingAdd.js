import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PaintingAdd.css";

function PaintingAdd({ onAddPainting }) {
    const navigate = useNavigate();
    const [paintingTitle, setPaintingTitle] = useState("");
    const [paintingImage, setPaintingImage] = useState("");
    const [paintingArtist, setPaintingArtist] = useState("");

    function handleTitleAddition(e) {
        setPaintingTitle(e.target.value);
    }
    function handleImageAddition(e) {
        setPaintingImage(e.target.value);
    }
    function handleArtistAddition(e) {
        setPaintingArtist(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newPainting = {
            title: paintingTitle,
            imageSrc: paintingImage,
            artist: paintingArtist,
        };
        fetch("http://localhost:3000/paintings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPainting),
        })
        .then((r) => r.json())
        .then((painting) => onAddPainting(painting));
        
        setPaintingArtist("");
        setPaintingImage("");
        setPaintingTitle("");
        navigate("/paintings");
    }
    
    return (
        <div className="form">
            <form onSubmit={(e) => handleSubmit(e)} className="NewPainting">
                <label>
                    Painting Title: 
                    <input type="text" name="Title" onChange={handleTitleAddition} value={paintingTitle} />
                </label>
                <br />
                <label>
                    Painting Image: 
                    <input type="text" name="Image" onChange={handleImageAddition} value={paintingImage} />
                </label>
                <br />
                <label>
                    Artist Name:
                    <input type="text" name="Artist" onChange={handleArtistAddition} value={paintingArtist} />
                </label>
                <br />
                <button type="submit">Add Painting</button> 
            </form>
        </div>
    )
}

export default PaintingAdd;