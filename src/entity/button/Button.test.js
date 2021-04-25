import React from 'react';
import ReactDOM from 'react-dom';
import Button from "./Button";
<<<<<<< HEAD
import {BrowserRouter, Route} from "react-router-dom";
=======
import { BrowserRouter } from "react-router-dom";
>>>>>>> 87d5f2509373c037be444776460f0594bac4246d

describe('render sans crash', () => {
    it("Avec un capteur", () => {
        const div = document.createElement("div");
        ReactDOM.render(<BrowserRouter><Button captors = {
            [{
                id: "135716",
                name: "Temperature Bureau N° 28",
                type: "TEMPERATURE",
                values: [1, 2, 3]
            }]
        }></Button></BrowserRouter>, div)
    });

    it("Sans un capteur", () => {
        const div = document.createElement("div");
        ReactDOM.render(<BrowserRouter><Button></Button></BrowserRouter>, div)
    });

    it("Avec un mauvais capteur", () => {
        const div = document.createElement("div");
        ReactDOM.render(<BrowserRouter><Button captors = {
            [{
                palu: "",
                values: "alo"
            }]
        }></Button></BrowserRouter>, div)
    });

    it("Avec un objet au lieu d'un tableau", () => {
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
});