import React, { Component } from "react";
// import Header from "./components/Header";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";
// import JSXVariables from "./JSXVariables";

const clickedCards = [];

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: friends,
    count: 0,
    topScore: 0,
    message: "Click an Image to Begin!"
  };

  score = () => {
    const score = this.state.count + 1;
    const topScore = this.state.topScore;
    // We always use the setState method to update a component's state
    this.setState({ count: score });
    console.log("Score", score);

    this.setState({ message: "You Guessed Correctly" });
    
    if (score > topScore) {
      this.setState({ topScore: this.state.topScore + 1 });
      console.log("Top Score", this.state.topScore);
    }
  };

  removeFriend = id => {
    if (clickedCards.includes(id)) {
    this.setState({ message: "You Guessed Incorrectly" });
      
      this.setState({ count: 0 });
      clickedCards.length = 0;
    } else {
      clickedCards.push(id);
      console.log("ID", id);
      console.log("clicked cards", clickedCards);
      this.score();
    }
  };

  render() {
    return (
      <Wrapper>
        <h1>Score: ({this.state.count}) |</h1>
        <h1>Top Score: ({this.state.topScore})</h1>
        <h1> {this.state.message}</h1>
        <Title>Kohl's Clicky Game!</Title>
        {this.state.friends.map(friend => (
          <Card
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
