import React, { Component } from "react";
import Counter from "../Components/counter";

class Counters extends Component {
  render() {
    console.log("Counters - Rendered");
    const { onReset, counters, onDelete, onIncrement, onDecrement, onAdd } =
      this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        <button onClick={onAdd} className="btn btn-info btn-sm m-2">
          Add
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            counter={counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          >
            <h4>Title#{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
