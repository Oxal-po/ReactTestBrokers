import React, { useState } from "react";
import Captor from "./../captor/Captor";
import { Link, Route, useHistory } from "react-router-dom";
import CGC from "../CssGridContainer.module.css";
import styleButton from "./Button.module.css";
import { uuid } from "uuidv4";

const Button = props => {

    const history = useHistory();
    const route = name => {
        return "/".concat(name)
    }

    const [captor, setCaptor] = useState({ values: [] });

    const [pushedButton, setPushedButton] = useState(0);

    const handleClick = captor => {
        setCaptor(captor);
        setPushedButton(captor.id);
        history.push(route(captor.name));
    }

    const buttons = () => {
        const buttons = [];
        if (props.captors && Array.isArray(props.captors)) {
            for (const cap of props.captors) {
                const className = cap.id === pushedButton ? styleButton.buttonActive : styleButton.button;
                buttons.push(
                    <div key={uuid()}>
                        <Link to={route(cap.name)}>
                            <button id={cap.id} className={className} onClick={() => handleClick(cap)}>
                                <h3>{cap.name}</h3>
                            </button>
                        </Link>
                    </div>
                );
            }
        }
        return buttons;
    }

    return (
        <>
            <div className={CGC.side}>
                {buttons()}
            </div>
            <div className={CGC.main}>
                <Route path={route(captor.name)}>
                    <Captor captor={captor} />
                </Route>
            </div>
        </>
    );
}

export default Button;