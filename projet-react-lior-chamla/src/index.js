import React from 'react';
import ReactDOM from 'react-dom';

import "./styles.css";

class App extends React.Component {

  state = {
    clients: [
      { id: 1, nom: "Nicolas Marquillier" },
      { id: 2, nom: "Caroline Marquillier" },
      { id: 3, nom: "Ines Marquillier" },
      { id: 4, nom: "Elise Marquillier" },
      { id: 5, nom: "Hugo Marquillier" }
    ]
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
  }

  // delClick = () => {
  //   // alert("Bonjour à vous");
  //   //this.setState({compteur: this.state.compteur + 1});
  //   //console.log(this.state);

  //   // la methode slice permet de créer une copie d'un tableau
  //   const clients = this.state.clients.shift();
  //   clients.push({ id: 4, nom: "Nesquik"})
  //   //le setState permet de changer l'etat d'un composant
  //   this.setState({clients: clients});
  // }

  render() {
    const title = "Liste des clients"

    return (
      <div>
        <h1>{title}</h1>
        <ul>
          {this.state.clients.map(client => (
            <li>
              {client.nom} <button onClick={() => this.handleDelete(client.id)}>X</button>
            </li>
          ))}
        </ul>
        <form>
          <input type="text" placeholder="Ajouter un client" />
          <button>Confirmer</button>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);




