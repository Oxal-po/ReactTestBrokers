import React from 'react';
import ReactDOM from 'react-dom';
import Button from "./Button";
import { BrowserRouter } from "react-router-dom";
import { act } from 'react-dom/test-utils';
  
let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});
  
afterEach(() => {
    document.body.removeChild(container);
    container = null;
});


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


describe('Handle Click', () => {
    it('Test click event', () => {
        const capteur = {
            id: "135716",
            name: "Temperature Bureau N° 28",
            type: "TEMPERATURE",
            values: [1, 2, 3]
        };

        act(() => {
            ReactDOM.render(<BrowserRouter><Button captors = {[capteur]}></Button></BrowserRouter>, container);
        });

        const button = container.querySelector('button');
        const label = container.querySelector('h3');
        expect(label.textContent).toBe(capteur.name);

        act(() => {
            button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
        });
        

        expect(document.documentURI).toBe( "http://localhost/" + encodeURIComponent(capteur.name));
      });
});