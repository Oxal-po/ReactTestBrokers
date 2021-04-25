import React from 'react';
import ReactDOM from 'react-dom';
import Button from "./button";
import BrowserRouter from "react-router-dom";

it ("render sans crash", () => {
    const div = document.createElement("div");
    ReactDOM.render(<BrowserRouter><Button captors={[]}></Button></BrowserRouter>, div)
});