import React, { Component } from 'react';
import './App.css';
import Card from './Card';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      text: "",
      content: [
        { name: "Phil", text: "testing" },
        { name: "Xi", text: "test 2" },
      ],
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    }) 
    console.log(this.state)
  }

  handleSubmit = (name, text) => {
    let a = { name: this.state.name, text: this.state.text }

    console.log(a)

    this.setState({
      content: [a, ...this.state.content],
      name: '',
      text: ''
    })
  }


  render() {
    return (
      <div className="App">
        <div className="form">
            Name: <input className="text-input" name="name" type="text" value={this.state.name} onChange={this.handleChange}></input>
            Text: <input className="text-input" name="text" type="text" value={this.state.text} onChange={this.handleChange}></input>
            <button onClick={this.handleSubmit}>Submit</button>
          </div>
  
          {this.state.content.map((item, index) => (
            <Card key={index} name={item['name']} text={item['text']} ></Card>
          ))}
      </div>
    );
  }
}

export default App;
