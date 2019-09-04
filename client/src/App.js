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
    score: 1,
    topscore: 10,
    clicked: []
  };

  removeFriend = id => {
  // Filter this.state.friends for friends with an id not equal to the id being removed
  const friends = this.state.friends.filter(friend => friend.id !== id);
  };

  // HERE: you need to look if the card was clicked before

  // if yes you need to init

  // if no you need to update scores and shuffle and then updete the state

  // if (this.state.clicked.includes(id)){

  //   // compare if the score is > topscore if ues update topsocre

  // }

  // else{

  // updte the array push the id to the clicked

  // score++

  // shuffle
  shuffle = friends => {
    // https://stackoverflow.com/a/43235780/10503606
    let newFriends = friends.sort(() => Math.random() - 0.5);
    return newFriends;
  };

  // }

  // Set this.state.friends equal to the new friends array
  
  //   this.setState({
  //      friends: newFriends,
  //     score:scoreTemp,
  //   topscore: topscoreTemp,
  // clicked: clickedTemp });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object

  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        <Navbar1
          score={this.state.score}
          topscore={this.state.topscore}
        />
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
