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
                    exact to="/Recipes"
                    exactstyle={{
                    color: "blue",
                    }}
                    activeStyle={{
                        color: "purple",
                    }}
                >
                    Recipes
                </NavLink>
            </div>
        </div>
    );
}

export default NavBar;