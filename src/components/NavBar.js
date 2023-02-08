import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <div className="navbar">
            <nav>
                <Link to="/" className="home">Home</Link>
            </nav>
            <nav>
                <Link to="/paintings" className="paintings">Paintings</Link>
            </nav>
            <nav>
                <Link to="/add-painting" className="add">Add a painting</Link>
            </nav>
        </div>
    );
}

export default NavBar;