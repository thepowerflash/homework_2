import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squarefirstColor: "red",
      squaresecondColor: "blue",
    };
  }

  SquareClick = () => {
    this.setState((prevState) => ({
      squarefirstColor: prevState.squaresecondColor,
      squaresecondColor: prevState.squarefirstColor,
    }));
  };

  render() {
    return (
      
      <div className="square-container">
        <Square color={this.state.squarefirstColor} onClick={this.SquareClick} />
        <Square color={this.state.squaresecondColor} onClick={this.SquareClick} />
      </div>
      
    );
  }
}

class Square extends Component {
  render() {
    return (
      <div className="square" style={{ backgroundColor: this.props.color }} onClick={this.props.onClick}></div>
    );
  }
}

export default App;