import React from 'react';
import ReactDOM from 'react-dom';

import "./styles.css";

class App extends React.Component {

  state = {
    clients: [
      {id: 1, nom: "Nicolas Marquillier"},
      {id: 2, nom: "Caroline Marquillier"},
      {id: 3, nom: "Ines Marquillier"},
      {id: 4, nom: "Elise Marquillier"},
      {id: 5, nom: "Hugo Marquillier"},
    ]
  }

handleClick() {
  alert("Bonjour à vous");
}

  render() {
    const title = "Liste des clients"
    // const element = <li>test variable</li>
    const elements = this.state.clients.map((client) =>
      <li>{client.nom} <button>X</button></li>
    )
    
    return (
      <div>
        <h1>{title}</h1>
        <button onClick={this.handleClick}>Click me</button>
        <ul>
          {elements}
        </ul>
        <form>
          <input type="text" placeholder="Ajouter un client"/>
          <button>Confirmer</button>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);




