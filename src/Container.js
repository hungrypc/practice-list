import React, { Component } from 'react';
import Card from './Card';

class Container extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "",
        text: "",
        content: this.props.content,
      }
    }
  
    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      }) 
      console.log(this.state)
    }

    tmp = (name, text) => {
        let a = this.state.name;
        let b = this.state.text;
        this.props.handleSubmit(a, b)
    }

    
  
    render() {
      return (
        <div className="container">
          <form className="form" onSubmit={this.tmp}>
            Name: <input className="text-input" name="name" type="text" value={this.state.name} onChange={this.handleChange}></input>
            Text: <input className="text-input" name="text" type="text" value={this.state.text} onChange={this.handleChange}></input>
            <button type="submit">Submit</button>
          </form>
  
          {this.state.content.map((item, index) => (
            <Card key={index} name={item['name']} text={item['text']} ></Card>
          ))}
        </div>
      );
    }
  }
  
  export default Container;
  
