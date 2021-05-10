import React from 'react';
import styleCaptors from './Captor.module.css'
import { uuid } from "uuidv4";

const Captor = props => {

    const renderHistorique = (values, type) => {
        if (values.length !== 0) {
            return values.map((value) => (
                <tr key={uuid()}>
                    <td>
                        {affichage(value, type)}
                    </td>
                </tr>
            ));
        }
    }


    const affichage = (value, type) => {
        switch (type) {
            case "TEMPERATURE":
                return parseFloat(value).toFixed(2) + "°";
            case "PERCENT":
                return (parseFloat(value) * 100).toFixed(2) + "%";
            default:
                return value;
        }
    }

    let type = "";
    let name = "Veuillez Cliquez sur un bouton";
    let values = [0];

    if (props.captor) {
        if (typeof props.captor.type === "string") {
            type = props.captor.type;
        }
        if (typeof props.captor.name === "string") {
            name = props.captor.name;
        }
        if (Array.isArray(props.captor.values)) {
            values = props.captor.values;
        }
    }

    return (
        <div>
            <h2>{name}</h2>
            <h4><i> Valeur actuelle : </i></h4>
            <h1>{affichage(values[0], type)}</h1>

            <h4>Historique : </h4>
            <div>
                <table className={styleCaptors.table}>
                    <tbody>
                        {renderHistorique(values, type)}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Captor;