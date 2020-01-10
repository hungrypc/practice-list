import React, { Component } from 'react';
import '../style/list.css';
import Card from './Card';

class List extends Component {
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
      <div className="list">
        <div className="ui list-container">
          <div className="ui segment form list-form">
            <div className="list-field">
              <input className="text-input" name="name" type="text" placeholder="Name"
              value={this.state.name} onChange={this.handleChange} autoComplete="off"></input>
              <input className="text-input" name="text" type="text" placeholder="Text"
              value={this.state.text} onChange={this.handleChange} autoComplete="off"></input>
              <button className="ui button" onClick={this.handleSubmit}>Submit</button>
            </div>
          </div>

          {this.state.content.map((item, index) => (
            <Card key={index} name={item['name']} text={item['text']} ></Card>
          ))}
        </div>

      </div>
    );
  }
}

export default List;
