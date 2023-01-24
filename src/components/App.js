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

    console.log("App");
    return (
        <div>
            <h1>Famous Paintings App</h1>
            <NavBar />
            <Routes>
                <Route path="/paintings/" element={<Paintings paintings={paintings} />} />
                <Route path="/add-painting/" element={<PaintingAdd />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;


