import React from 'react';
import ReactDOM from 'react-dom';
import Captor from "./Captor";

it ("render sans crash", function () {
    const div = document.createElement("div");
    ReactDOM.render(<Captor></Captor>, div);
});