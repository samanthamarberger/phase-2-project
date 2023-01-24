import React from "react";
import { Link } from "react-router-dom";

console.log("NAvBAr");

function NavBar() {
    return (
        <div className="navbar">
            <nav>
                <Link to="/">Home</Link>
            </nav>
            <nav>
                <Link to="/paintings">Paintings</Link>
            </nav>
            <nav>
                <Link to="/add-painting">Add a painting</Link>
            </nav>
        </div>
    );
}

export default NavBar;