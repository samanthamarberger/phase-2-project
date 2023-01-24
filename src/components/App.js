import React from "react";
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

    console.log("App");
    return (
        <div>
            
            <h1>Famous Paintings App</h1>
            <NavBar>
                <BrowserRouter>
                    <Routes>
                        <Route path="/paintings/" element={<Paintings />} />
                        <Route path="/add-painting/" element={<PaintingAdd />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </NavBar>
        </div>
    );
}

export default App;


