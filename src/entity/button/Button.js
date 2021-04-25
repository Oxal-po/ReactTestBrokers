import React from "react";
import Captor from "./../captor/Captor";
import { Link, Route } from "react-router-dom";
import CGC from "../CssGridContainer.module.css";
import styleButton from "./Button.module.css";
import PropTypes from "prop-types";


export default class Button extends React.Component {

    constructor(props) {
        super(props);
        this.captors = this.props.captors;
        this.state = {
            captors: [],
            captor: { values: [] }
        };
    }


    handleClick(captor) {
        this.setState({
            captor: captor
        });
        this.url = this.route(captor.name);
    }

    buttons() {
        const buttons = [];
        if (this.props.captors) {
            for (const captor of this.props.captors) { // TODO add class 'active' when onClick
                buttons.push(
                    <div>
                        <Link to={this.route(captor.name)}>
                            <button class={styleButton.button} onClick={() => this.handleClick(captor)}>
                                <h3>{captor.name}</h3>
                            </button>
                        </Link>
                    </div>
                );
            }
        }
        return buttons;
    }

    route(name = "", debut = "/") {
        return debut.concat(name);
    }

    render() {
        return (
            <>
                <div class={CGC.side}>
                    {this.buttons()}
                </div>
                <div class={CGC.main}>
                    <Route path={this.route(this.state.captor.name)}>
                        <Captor captor={this.state.captor} />
                    </Route>
                </div>
            </>
        );
    }

}

export { Button };