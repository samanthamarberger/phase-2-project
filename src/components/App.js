import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Recipes from "./Recipes";

function App() {
    return (
        <div>
            <NavBar>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/Recipes">
                        <Recipes />
                    </Route>
                </Switch>
            </NavBar>
        </div>
    )
}

export default App