import React from "react";
import Captor from "./../captor/Captor";
import {Link, Route} from "react-router-dom";
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
        for (const captor of this.props.captors) {
            buttons.push(
                <div>
                    <Link to={this.route(captor.name)}>
                        <button onClick={() => this.handleClick(captor)}><h3>{captor.name}</h3></button>
                    </Link>
                </div>
            );
        }
        return buttons;
    }

    route(name = "", debut = "/") {
        return debut.concat(name);
    }

    render() {
        return (
            <div>
                <div>
                    <div>
                        {this.buttons()}
                    </div>
                </div>
                <div>
                    <Route path={this.route(this.state.captor.name)}>
                        <Captor captor={this.state.captor} />
                    </Route>
                </div>
            </div>
        );
    }
    
}

export { Button };