import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Navbar1 from "./components/Navbar";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    topscore: 0
  };

  handleClick = id => {

    // Filter this.state.friends for friends with an id not equal to the id being clicked
    const cardClicked = this.state.friends.filter(friend => friend.id === id);
    console.log(cardClicked)
    console.log(cardClicked[0].clicked)

    // HERE: you need to look if the card was clicked before
    if (cardClicked[0].clicked === "true") {
      // if yes you need to init
      console.log("clicked before");
      this.resetGame();
    }
    // if no you need to update scores and shuffle and then updete the state
    else {
      console.log("not clicked before");
      const newFriends = this.state.friends.map(friend => {
        if (friend.id === id) {
          friend.clicked = "true";
        }
        return friend;
      });
      console.log(newFriends);
      this.setState({
        friends: newFriends.sort(() => Math.random() - 0.5),
        score: this.state.score + 1,
        topscore: this.state.score + 1 > this.state.topscore ? this.state.score + 1 : this.state.topscore
      });
    }
  };

  resetGame = () => {
    const newFriends = this.state.friends.map(friend => {
      friend.clicked = "false";
      return friend;
    });
    console.log("reset", newFriends)
    this.setState({
      friends: newFriends.sort(() => Math.random() - 0.5),
      score: 0
    });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Click 2 Score</Title>
        <Navbar1 score={this.state.score} topscore={this.state.topscore} />
        {this.state.friends.map(friend => (
          <FriendCard
            handleClick={this.handleClick}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            clicked={friend.clicked}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;