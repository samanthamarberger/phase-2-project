import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Paintings from "./Paintings";
import PaintingAdd from "./PaintingAdd";

function App() {
    return (
        <div>
            <h1>Famous Paintings App</h1>
            <NavBar>
                <Switch>
                    <Route exact path="/paintings">
                        <Paintings />
                    </Route>
                    <Route exact path="/add-painting">
                        <PaintingAdd />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
            </NavBar>
        </div>
    )
}

export default App