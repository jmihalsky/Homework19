import React, { Component } from 'react';
import Jumbotron from "../src/components/jumbotron";
import './App.css';
import friends from "./friends.json";
import ImageCard from "./components/card"

class App extends Component {

  state = {
    friends
  };

  render() {
    return (
      <div className="container-fluid">
      <Jumbotron/>
      {this.state.friends.map(friend => (
        <ImageCard
        id={friend.id}
        key={friend.id}
        name={friend.name}
        image={friend.image}
        />
      ))}
      </div>
    );
  }
}

export default App;
