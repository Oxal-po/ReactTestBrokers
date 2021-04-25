import React from 'react';
import ReactDOM from 'react-dom';
import Button from "./Button";
import {BrowserRouter, Route} from "react-router-dom";

describe('render sans crash', () => {
    it("Avec un capteur", () => {
        const div = document.createElement("div");
        ReactDOM.render(<BrowserRouter><Button captors = {
            {
                id: "135716",
                name: "Temperature Bureau N° 28",
                type: "TEMPERATURE",
                values: [1, 2, 3]
            }
        }></Button></BrowserRouter>, div)
    });

    it("Sans un capteur", () => {
        const div = document.createElement("div");
        ReactDOM.render(<BrowserRouter><Button></Button></BrowserRouter>, div)
    });
});