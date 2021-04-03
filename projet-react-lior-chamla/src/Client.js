import React, { Component } from "react";

class Client extends Component {
    render() {
        // const details = this.props.details;
        // const onDelete = this.props.onDelete;


        // la const en dessous = les 2 const au dessus mais en format destructuring
        const { details, onDelete } = this.props;

        return <li>
            {details.nom} {""}
            <button onClick={() => onDelete(details.id)}>X</button>
        </li>
    }
}

export default Client;