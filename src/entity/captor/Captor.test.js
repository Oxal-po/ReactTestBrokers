import React from 'react';
import ReactDOM from 'react-dom';
import Captor from "./Captor";

it ("render with captor TEMPERATURE", function () {
    const div = document.createElement("div");
    ReactDOM.render(<Captor captor={
        {
            id: "135716",
            name: "Temperature Bureau N° 28",
            type: "TEMPERATURE",
            values: [1, 2, 3]
        }
    }></Captor>
    , div)
});

it ("render with captor PERCENT", function () {
    const div = document.createElement("div");
    ReactDOM.render(<Captor captor={
        {
            id: "135716",
            name: "Temperature Bureau N° 28",
            type: "PERCENT",
            values: [1, 2, 3]
        }
    }></Captor>
    , div)
});

it ("render without captor", function () {
    const div = document.createElement("div");
    ReactDOM.render(<Captor></Captor>
    , div)
});

it ("render with bad captor", function () {
    const div = document.createElement("div");
    ReactDOM.render(<Captor captor={
        {
            palu: "",
            values: "alo"
        }
    }></Captor>
    , div)
});