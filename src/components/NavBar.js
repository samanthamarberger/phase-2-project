import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <div class="navbar">
            <nav>
                <Link to="/" class="home">Home</Link>
            </nav>
            <nav>
                <Link to="/paintings" class="paintings">Paintings</Link>
            </nav>
            <nav>
                <Link to="/add-painting" class="add">Add a painting</Link>
            </nav>
        </div>
    );
}

export default NavBar;