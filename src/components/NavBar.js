import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div className="navbar">
            <div>
                <NavLink
                    exact to="/"
                    exactstyle={{
                    color: "blue",
                    }}
                    activeStyle={{
                        color: "purple",
                    }}
                >
                    Home
                </NavLink>
            </div>
            <div>
                <NavLink
                    exact to="/paintings"
                    exactstyle={{
                    color: "blue",
                    }}
                    activeStyle={{
                        color: "purple",
                    }}
                >
                    Paintings
                </NavLink>
            </div>
            <div>
                <NavLink
                    exact to="/add-painting"
                    exactstyle={{
                    color: "blue",
                    }}
                    activeStyle={{
                        color: "purple",
                    }}
                >
                    Add a Painting
                </NavLink>
            </div>
        </div>
    );
}

export default NavBar;