import React from 'react';
import styleCaptors from './Captor.module.css'
import { uuid } from "uuidv4";

class Captor extends React.Component {



    render() {
        let type = "";
        let name = "Veuillez Cliquez sur un bouton";
        let values = [0];

        if(this.props.captor){
            if(typeof this.props.captor.type === "string"){
                type = this.props.captor.type;
            }
            if(typeof this.props.captor.name === "string"){
                name = this.props.captor.name;
            }
            if(Array.isArray(this.props.captor.values)){
                values = this.props.captor.values;
            }
        }
        return (
            <div>
                <h2>{name}</h2>
                <h4><i> Valeur actuelle : </i></h4>
                <h1>{this.affichage(values[0], type)}</h1>

                <h4>Historique : </h4>
                <div>
                    <table className={styleCaptors.table}>
                        <tbody>
                            {this.renderHistorique(values, type)}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    renderHistorique(values, type) {
        if (values.length !== 0) {
            return values.map((value) => (
                <tr key={uuid()}>
                    <td>
                        {this.affichage(value, type)}
                    </td>
                </tr>
            ));
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