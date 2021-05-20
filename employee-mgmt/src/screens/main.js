import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from '../components/Navbar';
import HomePage from "../components/homePage/HomePage";
import HorizontalLinearStepper from "../components/addEmployee/customStepper";
export const Main = () => {
    return (
        <React.Fragment>
            <Navbar />
            <div>
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route path="/addEmployee">
                        <HorizontalLinearStepper />
                    </Route>
                </Switch>
            </div>
        </React.Fragment>
    );
}