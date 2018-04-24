import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  render() {
    return (
      <Wrapper>
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
