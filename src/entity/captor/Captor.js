import React from 'react';

class Captor extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const type = this.props.sensor.type;
        return (
            <div>
                <h2>{this.props.sensor.name}</h2>
                <h4><i> Valeur actuelle : </i></h4>
                <h1>{this.affichage(this.props.sensor.values[0], type)}</h1>

                <h4>Historique : </h4>
                <div>
                    <table>
                        <tbody>
                            {this.renderHistorique()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    renderHistorique() {
        if (this.props.sensor.values.length !== 0) {
            const type = this.props.sensor.type;
            return this.props.sensor.values.map((value) => (
                <tr>
                    <td>{this.affichage(value, type)}</td>
                </tr>
            ));
        } else {
            return null;
        }

    }


    affichage(value, type) {
        switch (type) {
            case "TEMPERATURE":
                return parseFloat(value).toFixed(2) + "°";
            case "PERCENT":
                return (parseFloat(value) * 100).toFixed(2) + "%";
            default:
                return value;
        }
    }

}

export default Captor;