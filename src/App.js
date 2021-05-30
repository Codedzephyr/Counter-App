import React, { Component } from "react";
import Navbar from "./Components/navbar";
import Counters from "../src/Components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 4,
      },
      {
        id: 2,
        value: 0,
      },
      {
        id: 3,
        value: 0,
      },
      {
        id: 4,
        value: 0,
      },
      {
        id: 5,
        value: 0,
      },
    ],
  };

  constructor(props) {
    super(props);
    console.log("App - Constructor");
    //this.state = this.props.something;
  }

  componentDidMount() {
    console.log("App- Mounted");
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    console.log(this.state.counters[0]);
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    console.log(this.state.counters[0]);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    console.log("event has been called", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters });
  };

  handleAdd = (counterId) => {
    console.log("adding", counterId);
  };

  render() {
    console.log("App -rendered");
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onAdd={this.handleAdd}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
