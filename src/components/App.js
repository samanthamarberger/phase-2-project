import React, { useEffect, useState } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Paintings from "./Paintings";
import PaintingAdd from "./PaintingAdd";

function App() {

    const [paintings, setPaintings] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/paintings')
            .then((r) => r.json())
            .then((paintings) => setPaintings(paintings));
    }, [])

    function handleAddPainting(newPainting) {
        setPaintings([...paintings, newPainting]);
    }
    return (
        <div>
            <div class="title">
                <h1>My Favorite Paintings</h1>
            </div>
            <NavBar />
            <Routes>
                <Route path="/paintings/" element={<Paintings paintings={paintings} />} />
                <Route path="/add-painting/" element={<PaintingAdd onAddPainting={handleAddPainting}/>} />
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;


