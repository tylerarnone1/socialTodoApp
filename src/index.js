import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from "./toDolist"



var destination = document.querySelector("#root")


ReactDOM.render (
   
      <div className="App">
        <header className="App-header">
         <div>
           <TodoList/>
         </div>
        </header>
      </div>,
      destination
    );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

