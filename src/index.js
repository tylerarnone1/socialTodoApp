import React from 'react';
import ReactDOM from 'react-dom';
import {LandingPage} from "./landingPage";
import './index.css';
import TodoList from "./toDolist";
import {ProtectedRoute} from "./ProtectedRoute"
import {BrowserRouter, Route, Switch} from 'react-router-dom';



var destination = document.querySelector("#root")


function App() {
    return (
        <div className="App">
            <Switch>
            <Route exact path="/" component = {LandingPage}/>
            <ProtectedRoute exact path="/tasks" component = {TodoList}/>
            <Route path="*" component = {() => "404 not found"}/>
            </Switch>
        </div>
    );
}
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, destination);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

