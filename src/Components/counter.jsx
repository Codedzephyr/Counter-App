import React, { Component } from "react";

class Counter extends Component {
  state = {
    age: 25,
    imageUrl: "https://picsum.photos/200",
    tags: [],
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
  }

  //constructor(){
  //super()
  //this.handleIncrement = this.handleIncrement.bind(this);
  //}
  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;

    return (
      <ul>
        {" "}
        {this.state.tag.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    console.log("Counter - Rendered");
    return (
      <React.Fragment>
        {this.props.children}
        <img src={this.state.imageUrl} alt="" />
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <br />
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>

      /*
       <React.Fragment>
           {this.state.tags.length === 0 && 'please create a new tag!'}
       {this.renderTags()}
       </React.Fragment>
       */
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? <h5>Zero</h5> : value;
  }
  /*
    noteAge(){
        const {age} = this.state.age;
        return age <= 20 ? <h1>You are too old to vote</h1> : <h3>Go and play,bitch</h3>
    }
    */
}

export default Counter;
