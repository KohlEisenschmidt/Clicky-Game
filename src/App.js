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
    const sortedArray = this.state.friends;
    sortedArray.sort(function(a, b) {
      return 0.5 - Math.random();
    });
    this.setState({ friends: sortedArray });    
  };

  render() {
    return (

      // <div class="jumbotron">
      //   <h1 class="display-4">Hello, world!</h1>
      //   <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      //   <hr class="my-4">
      //     <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      //     <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      // </div>

      <Wrapper class="wrapper">


            {/* jumbotron template */}
          {/* <div class="jumbotron">
            <h1 class="display-4">Hello, world!</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr class="my-4">
              <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
              <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </div> */}

        <Title id="title">
          <div class="jumbotron">
            <h1 class="display-4">Kohl's Clicky Game!</h1>
            <p class="lead">{this.state.message}</p>
            <hr class="my-4"></hr>
            <h3 class="score">Score: {this.state.count} | Top Score: {this.state.topScore}</h3>
          </div></Title>


          {/* original tilte template */}
        {/* <Title id="title">Kohl's Clicky Game!</Title>
        <h1 class="score">Score: ({this.state.count}) |</h1>
        <h1 class="score">Top Score: ({this.state.topScore})</h1>
        <h1> {this.state.message}</h1>
         */}

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
