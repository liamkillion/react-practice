import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PizzaList from "./components/PizzaList";
import PizzaForm from "./components/PizzaForm";

class App extends Component {
  state = {
    pizzas: []
  };

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/pizzas")
      .then(req => req.json())
      .then(pizzas => this.setState({ pizzas: pizzas }));
  }

  createPizza = pizza => {
    const options = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      method: "POST",
      body: JSON.stringify({ pizza: pizza })
    };

    fetch("http://localhost:3000/api/v1/pizzas", options)
      .then(res => res.json())
      .then(console.log)
      .then(pizza => {
        this.setState(prevState => {
          return {
            pizzas: [...prevState.pizzas, pizza]
          };
        });
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <h1>Welcome to the Pizza Party</h1>
          <PizzaList pizzas={this.state.pizzas} />
          <PizzaForm createPizza={this.createPizza} />
        </div>
      </div>
    );
  }
}

export default App;
