import React from 'react';
import ReactDOM from 'react-dom';
import Client from './Client'

import "./styles.css";

class App extends React.Component {

  state = {
    clients: [
      { id: 1, nom: "Nicolas Marquillier" },
      { id: 2, nom: "Caroline Marquillier" },
      { id: 3, nom: "Ines Marquillier" },
      { id: 4, nom: "Elise Marquillier" },
      { id: 5, nom: "Hugo Marquillier" }
    ],
    nouveauClient: ''
  };

  handleDelete = (id) => {
    // la methode slice permet de créer une copie d'un tableau on ne travail pas directement sur le tableau mais sur une copie
    const clients = this.state.clients.slice();
    const index = clients.findIndex(function (client) {
      return client.id === id
    });
    // la methode plice permet de supprimer un element du tableau
    clients.splice(index, 1);
    // Le setstate permet de mettre à jour un élément
    this.setState({ clients: clients });
  };

  //   // la methode slice permet de créer une copie d'un tableau
  //   const clients = this.state.clients.shift();
  //   clients.push({ id: 4, nom: "Nesquik"})
  //   //le setState permet de changer l'etat d'un composant
  //   this.setState({clients: clients});
  // }

  handleSubmit = (event) => {
    event.preventDefault();
    
    const id = new Date().getTime();
    const nom = this.state.nouveauClient;

    const client = {id: id, nom: nom}
    // on peut aussi simplifier la const client comme ceci = const client = {id, nom}

    const clients = this.state.clients.slice();

    // ... = spread operator
    // const clients = [...this.state.clients];
    clients.push(client);

    this.setState({ clients: clients, nouveauClient: ''});
  }

  handleChange = (event) => {
    const value = event.currentTarget.value;
    this.setState({ nouveauClient: value });
  }

  render() {
    const title = "Liste des clients"

    return (
      <div>
        <h1>{title}</h1>
        <ul>
          {this.state.clients.map(client => (
            <Client details={client} onDelete={this.handleDelete} />
          ))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.nouveauClient} onChange={this.handleChange} type="text" placeholder="Ajouter un client" />
          {/* <input ref={this.clientInput} type="text" placeholder="Ajouter un client" /> */}
          <button>Confirmer</button>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);




