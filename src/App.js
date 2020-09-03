import React, { Component } from "react";
import logo from "./friedhead.svg";
import "./App.css";
import Question from "./Question/Question";

class App extends Component {
  state = {
    question: "What is the world's deepest lake?",
    answer: "Lake Baikal, in Russian Siberia",
  };

  revealAnswerHandler = (event) => {
    this.setState({ question: this.state.answer });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Today's Question</h1>
          <h2>Click to see the answer</h2>
        </header>

        <Question
          question={this.state.question}
          click={this.revealAnswerHandler}
        />
      </div>
    );
  }
}

export default App;
