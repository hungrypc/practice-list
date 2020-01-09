import React, { Component } from 'react';
import './App.css';
import Container from './Container';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [
        { name: "Phil", text: "testing" },
        { name: "Xi", text: "test 2" },
      ],
    }
  }

  handleSubmit = (name, text) => {
    this.setState(prevState => {
      const content = [ {name, text}, ...prevState.content];

      return {
        content
      }
    })
  }



  render() {
    return (
      <div className="App">
        <Container content={this.state.content} handleSubmit={this.handleSubmit}></Container>
      </div>
    );
  }
}

export default App;
