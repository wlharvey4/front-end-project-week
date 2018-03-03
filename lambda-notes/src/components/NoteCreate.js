/**
   NoteCreate.js
   =============
   Version 0.2 2018-03-03T13:37:57
   -------------------------------
   Create a new note;
   Allow for Composition by NoteEdit
   ==> see https://reactjs.org/docs/composition-vs-inheritance.html
   
 */

import React, { Component } from 'react';

class NoteCreate extends Component {

  constructor(props) {
    super(props);

    this.state = {
      self: this.props.self,
    }
  }

  componentWillMount() {
    console.log(`Mounting ... ${this.state.self} Component`);
    this.setState({ title: this.props.self });
  }

  componentDidMount() {
    console.log(`Entered => ${this.state.self} Component`);
  }

  render() {
    return (
      <h1>{this.state.title}</h1>
    );
  }
}

export default NoteCreate;
