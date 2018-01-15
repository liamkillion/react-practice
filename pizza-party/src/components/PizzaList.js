import React from "react";

class PizzaList extends React.Component {
  render() {
    const pizzas = this.props.pizzas.map((pizza, i) => {
      return <h2 key={i}>{pizza.name}</h2>;
    });
    return <div>{pizzas}</div>;
  }
}

export default PizzaList;
