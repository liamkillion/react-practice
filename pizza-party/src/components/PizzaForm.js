import React from "react";

class PizzaForm extends React.Component {
  state = {
    name: "",
    topping1: "",
    topping2: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.createPizza(this.state);
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.name}
          name="name"
        />
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.topping1}
          name="topping1"
        />
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.topping2}
          name="topping2"
        />
        <input type="submit" />
      </form>
    );
  }
}

export default PizzaForm;
