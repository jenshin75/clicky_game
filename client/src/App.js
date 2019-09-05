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
    topscore: 0,
    clicked: []
  };

  handleClick = id => {
    // Filter this.state.friends for friends with an id not equal to the id being clicked  
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    // this.setState({friends}); 

    // HERE: you need to look if the card was clicked before
  if (friends[0].clicked) {
      // if yes you need to init
    friends[0].clicked = true;
    this.handleIncrement();  // THIS WORKS!
  }    
//   else if (!friends[0].clicked) {
//    // if no you need to update scores and shuffle and then updete the state
//   friends[0].clicked = true;
//   this.handleDecrement(); 
// }    
  // {
  //   // if no you need to update scores and shuffle and then updete the state
  //   this.handleDecement();
  // } 
  };

    // (this.state.clicked.includes(id)){

  // compare if the score is > topscore if ues update topsocre

  // }

  // else{

  // updte the array push the id to the clicked




  // score++ (handleIncrement increments this.state.count by 1)
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score + 1 });
    this.shuffle(friends);
  };

  handleDecrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score - 1 });
    this.resetGame();
  };

  // shuffle
  shuffle = friends => {
    // https://stackoverflow.com/a/43235780/10503606
    let newFriends = friends.sort(() => Math.random() - 0.5);
    return newFriends;
  };


  //}

  // Set this.state.friends equal to the new friends array

  //   this.setState({
  //     friends: newFriends,
  //     score: scoreTemp,
  //     topscore: topscoreTemp,
  //     clicked: clickedTemp
  // });
  // ;

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