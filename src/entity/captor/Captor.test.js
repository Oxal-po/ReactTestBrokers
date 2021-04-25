import React from 'react';
import ReactDOM from 'react-dom';
import Captor from "./Captor";

it ("render sans crash", function () {
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