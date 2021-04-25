import React from "react";
import Captor from "./../captor/Captor";
import { Link, Route } from "react-router-dom";
import CGC from "../CssGridContainer.module.css";
import styleButton from "./Button.module.css";

class Button extends React.Component {

    constructor(props) {
        super(props);
        this.captors = this.props.captors;
        this.state = {
            captors: [],
            captor: { values: [] },
            pushedButton: 0
        };
    }


    handleClick(captor) {
        this.setState({
            captor: captor,
            pushedButton: captor.id
        });
        this.url = this.route(captor.name);
    }

    buttons() {
        const buttons = [];
        if (this.props.captors) {
            for (const captor of this.props.captors) { // TODO add class 'active' when onClick
                const className = captor.id === this.state.pushedButton ? styleButton.buttonActive : styleButton.button;
                buttons.push(
                    <div>
                        <Link to={this.route(captor.name)}>
                            <button id={captor.id} className={className} onClick={() => this.handleClick(captor)}>
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

export default Button;