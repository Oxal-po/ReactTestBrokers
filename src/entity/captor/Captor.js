import React from 'react';
import styleCaptors from './Captor.module.css'
import { uuid } from "uuidv4"

class Captor extends React.Component {



    render() {
        const type = this.props.captor.type ? this.props.captor.type : "";
        return (
            <div>
                <h2>{this.props.captor.name}</h2>
                <h4><i> Valeur actuelle : </i></h4>
                <h1>{this.affichage(this.props.captor.values[0], type)}</h1>

                <h4>Historique : </h4>
                <div>
                    <table className={styleCaptors.table}>
                        <tbody key={uuid()}>
                            {this.renderHistorique()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    renderHistorique() {
        if (this.props.captor.values.length !== 0) {
            const type = this.props.captor.type;
            return this.props.captor.values.map((value) => (
                <tr key={uuid()}>
                    <td key={uuid()}>
                        {this.affichage(value, type)}
                    </td>
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