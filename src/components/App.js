import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Recipes from "./Recipes";
import RecipeAdd from "./RecipeAdd";

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
                    <Route exact path="/RecipeAdd">
                        <RecipeAdd />
                    </Route>
                </Switch>
            </NavBar>
        </div>
    )
}

export default App